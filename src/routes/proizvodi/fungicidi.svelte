<svelte:head>
    <title>Agrimatco | Proizvodi | Fungicidi</title>
</svelte:head>

<script>
    import ProductCard from '../../components/ProductCard.svelte';

    let groups = [
        {
            name: '',
            items: [
                {
                    title: 'Azocip SC',
                    description: 'Sistematični fungicid za suzbijanje bolesti lista u pšenici, raži i pšenoraži',
                    image: 'fungicidi/azocip-sc.jpg',
                    link: 'katalozi/2020-prihrana.pdf#page=4'
                },
                {
                    title: 'Manfil 80 WP',
                    description: 'Preventicni kontaktni fungicid namijenjen suzbijanju biljnih bolesti u vinogradarstvu, voćarstvu i povrćarstvu',
                    image: 'fungicidi/manfil-80-wp.jpg',
                    link: 'katalozi/2020-prihrana.pdf#page=4'
                }
            ]
        }
    ]
</script>

<section class="section">
    <div class="container">
        <nav><small><a rel="prefetch" href="proizvodi">Proizvodi</a> > Fungicidi</small></nav>
        <h1>Fungicidi</h1>
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
