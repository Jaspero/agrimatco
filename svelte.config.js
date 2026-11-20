import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      out: 'build'
    }),
    // All of the site's CSS is ~12 KB; inlining it into the HTML saves the render-blocking
    // stylesheet round trips before the first paint.
    inlineStyleThreshold: 16384,
    prerender: {
      handleHttpError: 'warn'
    }
  }
};
