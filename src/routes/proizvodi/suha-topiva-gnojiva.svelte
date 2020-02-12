<svelte:head>
    <title>Agrimatco | Proizvodi | Suha topiva gnojiva</title>
</svelte:head>

<script>
    import ProductCard from '../../components/ProductCard.svelte';

    let groups = [
        {
            name: '',
            items: [
                {
                    title: 'Agro-K',
                    description: 'Vodotopivo folijarno gnojivo s visokim sadržajem fosfora i kalija',
                    image: 'suha-topiva-gnojiva/agro-k.jpg',
                    link: 'katalozi/2020-prihrana.pdf#page=18'
                },
                {
                    title: 'Rootex',
                    description: 'Stimulator rasta i razvoja korjena',
                    image: 'suha-topiva-gnojiva/rootex.jpg',
                    link: 'katalozi/2020-prihrana.pdf#page=22'
                },
                {
                    title: 'Oligomix',
                    description: 'Gnojivo s visokim sadržajem mikroelemenata organskog podrijetla',
                    image: 'suha-topiva-gnojiva/oligomix.jpg',
                    link: 'katalozi/2020-prihrana.pdf#page=29'
                },
                {
                    title: 'Trazex',
                    description: 'Visoka koncentracija mikroelemenata u fazama rasta i cvjetanja za folijarnu primjenu',
                    image: 'suha-topiva-gnojiva/trazex.jpg',
                    link: 'katalozi/2020-prihrana.pdf#page=29'
                },
                {
                    title: 'Tropicel',
                    description: 'Vodotopivo folijarno gnojivo s visokom koncentracijom bora, cinka i molibdena',
                    image: 'suha-topiva-gnojiva/tropicel.jpg',
                    link: 'katalozi/2020-prihrana.pdf#page=30'
                },
                {
                    title: 'Kelatex B',
                    description: 'Vodotopivo gnojivo sa visokom koncentracijom bora (B)',
                    image: 'suha-topiva-gnojiva/kelatex-b.jpg',
                    link: 'katalozi/2020-prihrana.pdf#page=31'
                },
                {
                    title: 'Kelatex Zn',
                    description: 'Vodotopivo gnojivo za folijarnu primjenu s visokom koncentracijom cinka (Zn)',
                    image: 'suha-topiva-gnojiva/kelatex-zn.png',
                    link: 'katalozi/2020-prihrana.pdf#page=32'
                },
                {
                    title: 'Kelatex Fe',
                    description: 'Vodotopivo gnojivo za folijarnu primjenu s visokom koncentracijom željeza (Fe)',
                    image: 'suha-topiva-gnojiva/kelatex-fe.jpg',
                    link: 'katalozi/2020-prihrana.pdf#page=33'
                },
                {
                    title: 'Panon Starter Perfect Pro',
                    description: '/',
                    image: 'suha-topiva-gnojiva/panon-starter-perfect-pro.png',
                    link: 'katalozi/2020-prihrana.pdf#page=41'
                }
            ]
        }
    ]
</script>

<section class="section">
    <div class="container">
        <nav><small><a rel="prefetch" href="proizvodi">Proizvodi</a> > Suha topiva gnojiva</small></nav>
        <h1>Suha topiva gnojiva</h1>
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
