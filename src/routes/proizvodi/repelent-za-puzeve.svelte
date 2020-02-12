<svelte:head>
    <title>Agrimatco | Proizvodi | Repelent za puževe</title>
</svelte:head>

<script>
    import ProductCard from '../../components/ProductCard.svelte';

    let groups = [
        {
            name: '',
            items: [
                {
                    title: 'Delumbri Limax',
                    description: 'Biološki repelent na bazi ekstrakata i biljnih ulja za odbijanje puževa',
                    image: 'repelent-za-puzeve/delumbri-limax.jpg',
                    link: 'katalozi/2020-prihrana.pdf#page=62'
                }
            ]
        }
    ]
</script>

<section class="section">
    <div class="container">
        <nav><small><a rel="prefetch" href="proizvodi">Proizvodi</a> > Repelent za puževe</small></nav>
        <h1>Repelent za puževe</h1>
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
