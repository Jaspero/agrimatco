<svelte:head>
    <title>Agrimatco | Proizvodi | Lukovičasto povrće</title>
</svelte:head>

<script>
    import ProductCard from '../../components/ProductCard.svelte';

    let groups = [
        {
            name: 'Luk',
            items: [
                {
                    title: 'Khroma F1',
                    description: 'Dobavljač: Isi Sementi',
                    image: 'sjeme-povrca/lukovicasto-povrce/luk/khroma-f1.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=42'
                },
                {
                    title: 'Bonita F1',
                    description: 'Dobavljač: Mira seeds',
                    image: 'sjeme-povrca/lukovicasto-povrce/luk/bonita-f1.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=42'
                },
                {
                    title: 'Ofelia F1',
                    description: 'Dobavljač: Mira seeds',
                    image: 'sjeme-povrca/lukovicasto-povrce/luk/ofelia-f1.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=42'
                },
                {
                    title: 'Reyana F1',
                    description: 'Dobavljač: Mira seeds',
                    image: 'sjeme-povrca/lukovicasto-povrce/luk/reyana-f1.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=42'
                },
                {
                    title: 'Focus F1',
                    description: 'Dobavljač: Isi Sementi',
                    image: 'sjeme-povrca/lukovicasto-povrce/luk/focus-f1.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=44'
                },
                {
                    title: 'Flavia',
                    description: 'Dobavljač: Mira seeds',
                    image: 'sjeme-povrca/lukovicasto-povrce/luk/flavia.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=44'
                },
                {
                    title: 'Extra Early Gold F1',
                    description: 'Dobavljač: United Genetics',
                    image: 'sjeme-povrca/lukovicasto-povrce/luk/extra-early-gold-f1.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=43'
                },
                {
                    title: 'Navajo ',
                    description: 'Dobavljač: Mira seeds',
                    image: 'sjeme-povrca/lukovicasto-povrce/luk/navajo.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=43'
                },
                {
                    title: 'Globo',
                    description: 'Dobavljač: SEMO',
                    image: 'sjeme-povrca/lukovicasto-povrce/luk/globo.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=43'
                },
                {
                    title: 'Aeneus',
                    description: 'Dobavljač: SEMO',
                    image: 'sjeme-povrca/lukovicasto-povrce/luk/aeneus.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=43'
                }
            ]
        },
        {
            name: 'Mladi luk',
            items: [
                {
                    title: 'Totem',
                    description: 'Dobavljač: Sakata',
                    image: 'sjeme-povrca/lukovicasto-povrce/mladi-luk/totem.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=45'
                },
                {
                    title: 'Yoda F1',
                    description: 'Dobavljač: Sakata',
                    image: 'sjeme-povrca/lukovicasto-povrce/mladi-luk/yoda-f1.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=45'
                },
                {
                    title: 'Gerda',
                    description: 'Dobavljač: SEMO',
                    image: 'sjeme-povrca/lukovicasto-povrce/mladi-luk/yoda-f1.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=45'
                },
                {
                    title: 'Kaj',
                    description: 'Dobavljač: SEMO',
                    image: 'sjeme-povrca/lukovicasto-povrce/mladi-luk/kaj.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=45'
                },
                {
                    title: 'Snow Queen',
                    description: 'Dobavljač: SEMO',
                    image: 'sjeme-povrca/lukovicasto-povrce/mladi-luk/snow-queen.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=45'
                }
            ]
        },
        {
            name: 'Poriluk',
            items: [
                {
                    title: 'Lancaster F1',
                    description: 'Dobavljač: Zada seeds',
                    image: 'sjeme-povrca/lukovicasto-povrce/poriluk/lancaster-f1.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=44'
                },
                {
                    title: 'Exeter F1',
                    description: 'Dobavljač: Zada seeds',
                    image: 'sjeme-povrca/lukovicasto-povrce/poriluk/exeter-f1.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=44'
                },
            ]
        }
    ]
</script>

<section class="section">
    <div class="container">
        <nav><small><a rel="prefetch" href="proizvodi">Proizvodi</a> > Lukovičasto povrće</small></nav>
        <h1>Lukovičasto povrće</h1>
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
