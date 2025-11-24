import { error } from '@sveltejs/kit';

export async function load({ fetch }) {
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
