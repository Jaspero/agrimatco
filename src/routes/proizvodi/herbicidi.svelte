<svelte:head>
    <title>Agrimatco | Proizvodi | Herbicidi</title>
</svelte:head>

<script>
    import ProductCard from '../../components/ProductCard.svelte';

    let groups = [
        {
            name: '',
            items: [
                {
                    title: 'NICO 4 SC',
                    description: 'Nikosulfuron 40 g/L',
                    image: 'herbicidi/nico-4-sc.png',
                    link: 'katalozi/2023-gnojidba-prihrana-zastita.pdf#page=60'
                },
                {
                    title: 'Cash',
                    description: 'Dikamba 480 g/L',
                    image: 'herbicidi/cash.png',
                    link: 'katalozi/2023-gnojidba-prihrana-zastita.pdf#page=60'
                },
                {
                    title: 'Gallup Super 480',
                    description: 'Totalni herbicid za suzbijanje travnih i širokolisnih korova. Glifosat 360 g/L',
                    image: 'herbicidi/gallup-super-480.png',
                    link: 'katalozi/2023-gnojidba-prihrana-zastita.pdf#page=61'
                },
                {
                    title: 'Plaza WG',
                    description: 'Rimsulfuron 250g/kg',
                    image: 'herbicidi/plaza.png',
                    link: 'katalozi/2023-gnojidba-prihrana-zastita.pdf#page=61'
                },
                {
                    title: 'Hurler ',
                    description: 'Fluroksipir 200g/L',
                    image: 'herbicidi/Hurler.jpg',
                    link: 'katalozi/2023-gnojidba-prihrana-zastita.pdf#page=62'
                },
                {
                    title: 'Darby ',
                    description: 'Totalni herbicid za suzbijanje travnih i širokolisnih korova. Glifosat 360 g/L',
                    image: 'herbicidi/Darby.png',
                    link: 'katalozi/2023-gnojidba-prihrana-zastita.pdf#page=62'
                }
            ]
        }
    ]
</script>

<section class="section">
    <div class="container">
        <nav><small><a rel="prefetch" href="proizvodi">Proizvodi</a> > Herbicidi</small></nav>
        <h1>Herbicidi</h1>
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
