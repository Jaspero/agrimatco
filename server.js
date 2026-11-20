// Production entry point (apphosting.yaml runCommand). It is adapter-node's own handler with
// Cache-Control added to the responses that had none, so the App Hosting CDN can answer them from
// the edge instead of waking Cloud Run for every file:
//
//  - media files from static/ (photos, logos, fonts, PDFs...): adapter-node serves them with no
//    Cache-Control, which the CDN treats as uncacheable. They get a week in browsers and a year on
//    the CDN, which App Hosting empties on every rollout.
//  - HTML pages and text files (search.json, the manifest, service-worker.js): cached on the CDN
//    (s-maxage) but always revalidated by browsers (max-age=0), so a deploy shows up at once.
//
// /_app/immutable/ already has a year-long immutable header from adapter-node and is left alone, as
// is anything that sets a cookie, is not a GET/HEAD, or is not a 200.
//
// Pages are also compressed here (see compress below).
import http from 'node:http';
import process from 'node:process';
import compression from 'compression';
import { handler } from './build/handler.js';

// adapter-node sends pages uncompressed (only its prebuilt .br/.gz files are compressed) and the CDN
// does not compress them either; this compresses HTML and JSON, and skips anything already encoded.
const compress = compression({ threshold: 1024 });

const STATIC_FILE = /\.(?:avif|webp|jpe?g|png|gif|svg|ico|woff2?|ttf|otf|eot|mp4|webm|ogg|mp3|pdf|stl|zip)$/i;
const STATIC_CACHE = 'public, max-age=604800, s-maxage=31536000';
const PAGE_CACHE = 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400';

function headerIn(headers, name) {
  if (!headers || typeof headers !== 'object') return undefined;
  if (Array.isArray(headers)) {
    for (let i = 0; i < headers.length; i += 2) {
      if (String(headers[i]).toLowerCase() === name) return headers[i + 1];
    }
    return undefined;
  }
  for (const key of Object.keys(headers)) {
    if (key.toLowerCase() === name) return headers[key];
  }
  return undefined;
}

function policyFor(pathname, contentType) {
  if (pathname.startsWith('/_app/immutable/')) return undefined;
  if (STATIC_FILE.test(pathname)) return STATIC_CACHE;
  if (/^text\/html\b/i.test(contentType) || pathname.endsWith('/__data.json')) return PAGE_CACHE;
  // search.json, the manifest, service-worker.js...: they change with the content, so revalidated.
  if (/\.(?:css|js|json|txt|xml|webmanifest)$/i.test(pathname)) return PAGE_CACHE;
  return undefined;
}

const server = http.createServer((req, res) => {
  if (req.method === 'GET' || req.method === 'HEAD') {
    const pathname = (req.url || '/').split('?')[0];
    const writeHead = res.writeHead;
    res.writeHead = function (status, ...rest) {
      const headers = typeof rest[0] === 'string' ? rest[1] : rest[0];
      if (
        status === 200 &&
        !res.getHeader('cache-control') &&
        !headerIn(headers, 'cache-control') &&
        !res.getHeader('set-cookie') &&
        !headerIn(headers, 'set-cookie')
      ) {
        const type = String(res.getHeader('content-type') || headerIn(headers, 'content-type') || '');
        const policy = policyFor(pathname, type);
        if (policy) res.setHeader('Cache-Control', policy);
      }
      return writeHead.call(this, status, ...rest);
    };
  }
  compress(req, res, () =>
    handler(req, res, () => {
      res.statusCode = 404;
      res.end('Not found');
    })
  );
});

const host = process.env.HOST || '0.0.0.0';
const port = Number(process.env.PORT || 3000);
server.keepAliveTimeout = 65_000;
server.listen(port, host, () => console.log(`Listening on http://${host}:${port}`));

for (const signal of ['SIGTERM', 'SIGINT']) {
  process.once(signal, () => server.close(() => process.exit(0)));
}
