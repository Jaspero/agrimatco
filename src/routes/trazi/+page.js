import { error } from '@sveltejs/kit';
import { browser } from '$app/environment';

export async function load({ fetch }) {
  // The search files are static assets; on the server SvelteKit would fetch them over the public URL,
  // which fails on App Hosting (the page answered 500 when opened directly). The page renders without
  // them on the server and this load runs again in the browser during hydration, which fetches them.
  if (!browser) return { search: null, searchIndexes: null };

  try {
    const [searchRes, indexesRes] = await Promise.all([
      fetch(`/search.json`),
      fetch(`/search-indexes.json`)
    ]);

    if (!searchRes.ok || !indexesRes.ok) {
      throw new Error('Failed to load search files');
    }

    const [search, searchIndexes] = await Promise.all([searchRes.json(), indexesRes.json()]);

    return { search, searchIndexes };
  } catch (e) {
    throw error(500, 'Greška sa učitavanjem sadržaja.');
  }
}
