<svelte:head>
    <title>Agrimatco | Proizvodi | Ljepljive ploče i role</title>
</svelte:head>

<script>
    import ProductCard from '../../components/ProductCard.svelte';

    let groups = [
        {
            name: '',
            items: [
                {
                    title: 'Ljepljiva ploča za insekte',
                    description: 'CRNA - 25 cm x 40 cm',
                    image: 'ljepljive-ploce-i-role/ploca-crna-25x40.jpg',
                    link: 'proizvodi/ljepljive-ploce-i-role/ljepljiva-ploca-crna-25cm-x-40cm'
                },
                {
                    title: 'Ljepljiva ploča za insekte',
                    description: 'PLAVA – 10 cm x 25 cm',
                    image: 'ljepljive-ploce-i-role/ploca-plava-10x25.jpg',
                    link: 'proizvodi/ljepljive-ploce-i-role/ljepljiva-ploca-plava-10cm-x-25cm'
                },
                {
                    title: 'Ljepljiva ploča za insekte',
                    description: 'PLAVA - 25 cm x 40 cm',
                    image: 'ljepljive-ploce-i-role/ploca-plava-25x40.jpg',
                    link: 'proizvodi/ljepljive-ploce-i-role/ljepljiva-ploca-plava-25cm-x-40cm'
                },
                {
                    title: 'Ljepljiva ploča za insekte',
                    description: 'ŽUTA - 10 cm x 25 cm',
                    image: 'ljepljive-ploce-i-role/ploca-zuta-10x25.jpg',
                    link: 'proizvodi/ljepljive-ploce-i-role/ljepljiva-ploca-zuta-10cm-x-25cm'
                },
                {
                    title: 'Ljepljiva ploča za insekte',
                    description: 'ŽUTA - 25 cm x 40 cm',
                    image: 'ljepljive-ploce-i-role/ploca-zuta-25x40.jpg',
                    link: 'proizvodi/ljepljive-ploce-i-role/ljepljiva-ploca-zuta-25cm-x-40cm'
                },
                {
                    title: 'Ljepljiva rola za insekte',
                    description: 'CRNA - 30 cm x 100 m',
                    image: 'ljepljive-ploce-i-role/rola-crna-30x100.jpg',
                    link: 'proizvodi/ljepljive-ploce-i-role/ljepljiva-rola-crna-30cm-x-100m'
                },
                {
                    title: 'Ljepljiva rola za insekte',
                    description: 'PLAVA - 15 cm x 100 m',
                    image: 'ljepljive-ploce-i-role/rola-plava-15x100.jpg',
                    link: 'proizvodi/ljepljive-ploce-i-role/ljepljiva-rola-plava-15cm-x-100m'
                },
                {
                    title: 'Ljepljiva rola za insekte',
                    description: 'PLAVA - 30 cm x 100 m',
                    image: 'ljepljive-ploce-i-role/rola-plava-30x100.jpg',
                    link: 'proizvodi/ljepljive-ploce-i-role/ljepljiva-rola-plava-30cm-x-100m'
                },
                {
                    title: 'Ljepljiva rola za insekte',
                    description: 'ŽUTA – 15 cm x 100 m',
                    image: 'ljepljive-ploce-i-role/rola-zuta-15x100.jpg',
                    link: 'proizvodi/ljepljive-ploce-i-role/ljepljiva-rola-zuta-15cm-x-100m'
                },
                {
                    title: 'Ljepljiva rola za insekte',
                    description: 'ŽUTA - 30 cm x 100 m',
                    image: 'ljepljive-ploce-i-role/rola-zuta-30x100.jpg',
                    link: 'proizvodi/ljepljive-ploce-i-role/ljepljiva-rola-zuta-30cm-x-100m'
                }
            ]
        }
    ]
</script>

<section class="section">
    <div class="container">
        <nav><small><a rel="prefetch" href="proizvodi">Proizvodi</a> > Ljepljive ploče i role</small></nav>
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
