<svelte:head>
    <title>Agrimatco | Proizvodi | Okvašivači</title>
</svelte:head>

<script>
    import ProductCard from '../../components/ProductCard.svelte';

    let groups = [
        {
            name: '',
            items: [
                {
                    title: 'Inex',
                    description: 'Okvašivač, penetrator i aktivator',
                    image: 'okvasivaci/inex.jpg',
                    link: 'katalozi/2023-gnojidba-prihrana-zastita.pdf#page=44'
                },
                {
                    title: 'Sticker',
                    description: 'Posebno formulirano pomoćno sredstvo za primjenu u poljoprivredi',
                    image: 'okvasivaci/sticker.jpg',
                    link: 'katalozi/2023-gnojidba-prihrana-zastita.pdf#page=46'
                },
                {
                    title: 'Surfare ',
                    description: 'Pomoćno sredstvo, okvašivač, snižava tvrdoću i pH otopine',
                    image: 'okvasivaci/surfare.jpg',
                    link: 'katalozi/2023-gnojidba-prihrana-zastita.pdf#page=45'
                },
                {
                    title: 'Backrow Max ',
                    description: 'Okvašivač za maksimalni i produženi učinak zemljišnih herbicida',
                    image: 'okvasivaci/backrow.png',
                    link: 'katalozi/2023-gnojidba-prihrana-zastita.pdf#page=47'
                },
                {
                    title: 'Crusade ',
                    description: 'Okvašivač za maksimalan učinak fungicida protiv plamenjače u krumpiru',
                    image: 'okvasivaci/crusade.png',
                    link: 'katalozi/2023-gnojidba-prihrana-zastita.pdf#page=48'
                },
                {
                    title: 'Soptech ',
                    description: 'Mješavina masnih alkohola',
                    image: 'okvasivaci/soptech.png',
                    link: 'katalozi/2023-gnojidba-prihrana-zastita.pdf#page=48'
                }
            ]
        }
    ]
</script>

<section class="section">
    <div class="container">
        <nav><small><a rel="prefetch" href="proizvodi">Proizvodi</a> > Okvašivači</small></nav>
        <h1>Okvašivači</h1>
        {#each groups as group}
            <h2>{group.name}</h2>
            <div class="grid">
                {#each group.items as item}
                    <div class="col-4 col-s-6 col-xs-12">
                        <ProductCard title={item.title} description={item.description} image={item.image} link={item.link}/>
                    </div>
                {/each}
            </div>
        {/each}
    </div>
</section>
