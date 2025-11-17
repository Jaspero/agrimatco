<svelte:head>
    <title>Agrimatco | Proizvodi | Ljepljive ploče i role</title>
</svelte:head>

<script>
    import ProductCard from '../../components/ProductCard.svelte';

    let groups = [
        {
            name: '',
            items: [
            ]
        }
    ]
</script>

<section class="section">
    <div class="container">
        <nav><small><a  href="/proizvodi">Proizvodi</a> > Ljepljive ploče i role</small></nav>
        <h1>Ljepljive ploče i role</h1>
        {#each groups as group}
            <h2>{group.name}</h2>
            <div class="grid">
                {#each group.items as item}
                    <div class="col-4 col-s-6 col-xs-12">
                        <ProductCard title={item.title} description={item.description} image={item.image} link={item.link} target="_self"/>
                    </div>
                {/each}
            </div>
        {/each}
    </div>
</section>
