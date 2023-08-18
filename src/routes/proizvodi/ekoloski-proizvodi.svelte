<svelte:head>
    <title>Agrimatco | Proizvodi | Ekološki proizvodi</title>
</svelte:head>

<script>
    import ProductCard from '../../components/ProductCard.svelte';

    let groups = [
        {
            name: '',
            items: [
                {
                    title: 'Folisec',
                    description: '/',
                    image: 'ekoloski-proizvodi/folisec.jpg',
                    link: 'katalozi/2021-eko-katalog.pdf#page=17'
                },
                {
                    title: 'Herfomic',
                    description: '/',
                    image: 'ekoloski-proizvodi/herfomyc.jpg',
                    link: 'katalozi/2021-eko-katalog.pdf#page=18'
                },
                {
                    title: 'Herfosec',
                    description: '/',
                    image: 'ekoloski-proizvodi/herfosec.jpg',
                    link: 'katalozi/2021-eko-katalog.pdf#page=19'
                },
                {
                    title: 'Ekološka gnojiva',
                    description: '/',
                    image: 'ekoloski-proizvodi/ekoloska-gnojiva.png',
                    // link: 'katalozi/2023-gnojidba-prihrana-zastita.pdf#page=8'
                },
                {
                    title: 'Repelent za puževe',
                    description: '/',
                    image: 'ekoloski-proizvodi/repelent-za-puzeve.jpg',
                    // link: 'katalozi/2023-gnojidba-prihrana-zastita.pdf#page=62'
                },
                {
                    title: 'Nemater ',
                    description: '/',
                    image: 'ekoloski-proizvodi/nemater.webp',
                    link: 'katalozi/2021-eko-katalog.pdf#page=20'
                },
                {
                    title: 'Tercol',
                    description: '/',
                    image: 'ekoloski-proizvodi/tercol.webp',
                    link: 'katalozi/2021-eko-katalog.pdf#page=21'
                },
                {
                    title: 'Ascoleg',
                    description: '/',
                    image: 'ekoloski-proizvodi/ascoleg.png',
                    link: 'katalozi/2021-eko-katalog.pdf#page=31'
                },
                {
                    title: 'Borealg',
                    description: '/',
                    image: 'ekoloski-proizvodi/borelag.png',
                    link: 'katalozi/2021-eko-katalog.pdf#page=32'
                },
                {
                    title: 'TSL29',
                    description: '/',
                    image: 'ekoloski-proizvodi/TSL29.png',
                    link: 'katalozi/2021-eko-katalog.pdf#page=33'
                }
            ]
        }
    ]
</script>

<section class="section">
    <div class="container">
        <nav><small><a rel="prefetch" href="proizvodi">Proizvodi</a> > Ekološki proizvodi</small></nav>
        <h1>Ekološki proizvodi</h1>
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
