<svelte:head>
    <title>Agrimatco | Proizvodi | Bioprotektor</title>
</svelte:head>

<script>
    import ProductCard from '../../../components/ProductCard.svelte';

    let groups = [
        {
            name: '',
            items: [
                {
                    title: 'Barrier',
                    description: 'Stanični učvrščivać na bazi kalcija i silicija / stimulator otpornosti',
                    image: 'bioprotektor/barrier.jpg',
                    link: 'katalozi/2023-gnojidba-prihrana-zastita.pdf#page=19'
                },
            ]
        }
    ]
</script>

<section class="section">
    <div class="container">
        <nav><small><a  href="/proizvodi">Proizvodi</a> > Bioprotektor</small></nav>
        <h1>Bioprotektor</h1>
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
