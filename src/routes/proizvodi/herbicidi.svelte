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
                    description: '/',
                    image: 'herbicidi/nico-4-sc.jpg',
                    link: 'katalozi/2020-prihrana.pdf#page=58'
                },
                {
                    title: 'Cash',
                    description: '/',
                    image: 'herbicidi/cash.jpg',
                    link: 'katalozi/2020-prihrana.pdf#page=58'
                },
                {
                    title: 'Gallup Super 480',
                    description: 'Totalni herbicid za suzbijanje travnih i širokolisnih korova',
                    image: 'herbicidi/gallup-super-480.png',
                    link: 'katalozi/2020-prihrana.pdf#page=59'
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
