/**
 * The page's JavaScript is preloaded at low priority, so the first slide's photo and the fonts get
 * the bandwidth first and the page paints before the scripts arrive. SvelteKit would announce the
 * same modules in a `Link` response header, which browsers fetch at high priority; they are moved
 * into the <head> as <link rel="modulepreload" fetchpriority="low"> instead. Same files, found at
 * the same moment, just queued behind what is on screen. CSS is inlined, so nothing else is
 * preloaded.
 *
 * @type {import('@sveltejs/kit').Handle}
 */
export async function handle({ event, resolve }) {
  /** @type {string[]} */
  const modules = [];
  let inserted = false;
  return resolve(event, {
    preload: ({ type, path }) => {
      if (type === 'js') modules.push(path);
      return false;
    },
    transformPageChunk: ({ html }) => {
      if (inserted || modules.length === 0 || !html.includes('</head>')) return html;
      inserted = true;
      const links = modules
        .map((path) => `<link rel="modulepreload" href="${path}" fetchpriority="low">`)
        .join('\n    ');
      return html.replace('</head>', `    ${links}\n  </head>`);
    }
  });
}
