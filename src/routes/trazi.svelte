<script context="module">
    export async function preload() {
        try {
            let [search, searchIndexes] = await Promise.all([
                this.fetch(`/search.json`),
                this.fetch(`/search-indexes.json`)
            ]);

            [search, searchIndexes] = await Promise.all([
                search.json(),
                searchIndexes.json()
            ]);

            return {search, searchIndexes};
        } catch (e) {
            this.error(500, 'Greška sa učitavanjem sadržaja.');
        }
    }
</script>

<svelte:head>
    <title>Agrimatco | Traži</title>
</svelte:head>

<script>
    import lunr from 'lunr';
    import Field from '../components/Field.svelte';
    import Button from '../components/Button.svelte';

    export let search;
    export let searchIndexes;

    const replaces = [
        {value: 'č', replace: 'c'},
        {value: 'č', replace: 'c'},
        {value: 'ž', replace: 'z'},
        {value: 'đ', replace: 'd'},
        {value: 'š', replace: 's'},
    ];
    const idx = lunr.Index.load(searchIndexes);

    let searchField = '';
    let results = [];
    let searched = false;

    function handleSubmit() {

        searched = true;

        let toSearch = searchField
            .trim()
            .toLowerCase();

        replaces.forEach(it =>
            toSearch = toSearch.replace(new RegExp(it.value, 'g'), it.replace)
        );

        results = idx.search(toSearch)
            .map(it =>
                search.find(sr => sr.id === it.ref)
            )
    }
</script>

<section class="section">
    <div class="container">
        <h1>Pretraživanje pojmova</h1>
        <p>Upišite pojam koji želite pronaći:</p>
        <form id="form" on:submit|preventDefault="{handleSubmit}">
            <Field label="Pojam">
                <input type="search" size="40" bind:value={searchField} required>
            </Field>
            <Button type="submit">Traži</Button>
        </form>
        {#if results && results.length}
            <figure>
                <figcaption><b>Rezultati:</b></figcaption>
                <ul>
                    {#each results as result}
                        <li>
                            <a href="{result.link}" rel="prefetch">{result.label}</a>
                        </li>
                    {/each}
                </ul>
            </figure>
        {/if}
        {#if searched && results.length === 0}
            <p>Nema rezultata.</p>
        {/if}
    </div>
</section>
