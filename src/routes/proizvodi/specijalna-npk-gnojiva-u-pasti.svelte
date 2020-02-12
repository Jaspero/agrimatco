<svelte:head>
    <title>Agrimatco | Proizvodi | Specijalna NPK gnojiva u pasti</title>
</svelte:head>

<script>
    import ProductCard from '../../components/ProductCard.svelte';

    let groups = [
        {
            name: '',
            items: [
                {
                    title: 'Amcopaste',
                    description: 'NPK folijarno gnojivo koje smanjuje rast algi i stvaranje kamenca unutar trajnih sustava za navodnjavanje',
                    image: 'specijalna-npk-gnojiva-u-pasti/amcopaste.png',
                    link: 'katalozi/2020-prihrana.pdf#page=13'
                },
            ]
        }
    ]
</script>

<section class="section">
    <div class="container">
        <nav><small><a rel="prefetch" href="proizvodi">Proizvodi</a> > Specijalna NPK gnojiva u pasti</small></nav>
        <h1>Specijalna NPK gnojiva u pasti</h1>
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
