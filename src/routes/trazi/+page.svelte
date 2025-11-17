
<svelte:head>
    <title>Agrimatco | Traži</title>
</svelte:head>

<script>
    import lunr from 'lunr';
    import Field from '../../components/Field.svelte';
    import Button from '../../components/Button.svelte';

    export let data;
    
    $: search = data?.search || [];
    $: searchIndexes = data?.searchIndexes;

    const replaces = [
        {value: 'č', replace: 'c'},
        {value: 'č', replace: 'c'},
        {value: 'ž', replace: 'z'},
        {value: 'đ', replace: 'd'},
        {value: 'š', replace: 's'},
    ];
    
    $: idx = searchIndexes ? lunr.Index.load(typeof searchIndexes === 'string' ? JSON.parse(searchIndexes) : searchIndexes) : null;

    let searchField = '';
    let results = [];
    let searched = false;

    function handleSubmit() {
        if (!idx || !search) return;
        
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
            .filter(Boolean);
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
                            <a href="{result.link}">{result.label}</a>
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
