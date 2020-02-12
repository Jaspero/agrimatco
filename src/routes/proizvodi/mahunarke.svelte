<svelte:head>
    <title>Agrimatco | Proizvodi | Mahunarke</title>
</svelte:head>

<script>
    import ProductCard from '../../components/ProductCard.svelte';

    let groups = [
        {
            name: 'Mahune',
            items: [
                {
                    title: 'Primel',
                    description: 'Dobavljač: Vilmorin',
                    image: 'sjeme-povrca/mahunarke/mahune/primel.jpg',
                    link: 'katalozi/2020-sjeme-povrca.pdf#page=56'
                },
                {
                    title: 'Sundance',
                    description: 'Dobavljač: Vilmorin',
                    image: 'sjeme-povrca/mahunarke/mahune/sundance.jpg',
                    link: 'katalozi/2020-sjeme-povrca.pdf#page=56'
                }
            ]
        }
    ]
</script>

<section class="section">
    <div class="container">
        <nav><small><a rel="prefetch" href="proizvodi">Proizvodi</a> > Mahunarke</small></nav>
        <h1>Mahunarke</h1>
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
