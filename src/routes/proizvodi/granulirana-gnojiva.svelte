<svelte:head>
    <title>Agrimatco | Proizvodi | Granulirana gnojiva</title>
</svelte:head>

<script>
    import ProductCard from '../../components/ProductCard.svelte';

    let groups = [
        {
            name: '',
            items: [
                {
                    title: 'GranuPotasse',
                    description: 'Granulirano gnojivo koje osigurava optimalnu prihranu kalija i sumpora',
                    image: 'granulirana-gnojiva/granupotasse.jpg',
                    link: 'katalozi/2020-prihrana.pdf#page=10'
                },
                {
                    title: 'Alba Grow',
                    description: 'Startno gnojivo nove generacije',
                    image: 'granulirana-gnojiva/alba-grow.png',
                    link: 'katalozi/2020-prihrana.pdf#page=11'
                }
            ]
        }
    ]
</script>

<section class="section">
    <div class="container">
        <nav><small><a rel="prefetch" href="proizvodi">Proizvodi</a> > Granulirana gnojiva</small></nav>
        <h1>Granulirana gnojiva</h1>
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
