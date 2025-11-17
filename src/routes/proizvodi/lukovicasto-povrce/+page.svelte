<svelte:head>
    <title>Agrimatco | Proizvodi | Lukovičasto povrće</title>
</svelte:head>

<script>
    import ProductCard from '../../../components/ProductCard.svelte';

    let groups = [
        {
            name: 'Luk',
            items: [
                {
                    title: 'Cordelia F1',
                    description: 'Dobavljač: Mira seeds',
                    image: 'sjeme-povrca/lukovicasto-povrce/luk/cordelia.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=38'
                },
                {
                    title: 'Bonita F1',
                    description: 'Dobavljač: Mira seeds',
                    image: 'sjeme-povrca/lukovicasto-povrce/luk/bonita-f1.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=38'
                },
                {
                    title: 'Reyana F1',
                    description: 'Dobavljač: Mira seeds',
                    image: 'sjeme-povrca/lukovicasto-povrce/luk/reyana-f1.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=38'
                },
                {
                    title: 'Flavia',
                    description: 'Dobavljač: Mira seeds',
                    image: 'sjeme-povrca/lukovicasto-povrce/luk/flavia.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=39'
                },
                {
                    title: 'Navajo ',
                    description: 'Dobavljač: Mira seeds',
                    image: 'sjeme-povrca/lukovicasto-povrce/luk/navajo.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=39'
                },
                {
                    title: 'Selma F1',
                    description: 'Dobavljač: Mira seeds',
                    image: 'sjeme-povrca/lukovicasto-povrce/luk/selma.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=39'
                },
            ]
        },
        {
            name: 'Mladi luk',
            items: [
                {
                    title: 'Totem',
                    description: 'Dobavljač: Sakata',
                    image: 'sjeme-povrca/lukovicasto-povrce/mladi-luk/totem.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=41'
                },
                {
                    title: 'Yoda F1',
                    description: 'Dobavljač: Sakata',
                    image: 'sjeme-povrca/lukovicasto-povrce/mladi-luk/yoda-f1.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=41'
                },
                {
                    title: 'Gerda',
                    description: 'Dobavljač: SEMO',
                    image: 'sjeme-povrca/lukovicasto-povrce/mladi-luk/gerda.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=41'
                },
                {
                    title: 'Kaj',
                    description: 'Dobavljač: SEMO',
                    image: 'sjeme-povrca/lukovicasto-povrce/mladi-luk/kaj.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=41'
                },
                {
                    title: 'Snow Queen',
                    description: 'Dobavljač: SEMO',
                    image: 'sjeme-povrca/lukovicasto-povrce/mladi-luk/snow-queen.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=41'
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
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=40'
                },
                {
                    title: 'Exeter F1',
                    description: 'Dobavljač: Zada seeds',
                    image: 'sjeme-povrca/lukovicasto-povrce/poriluk/exeter-f1.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=40'
                },
            ]
        }
    ]
</script>

<section class="section">
    <div class="container">
        <nav><small><a  href="/proizvodi">Proizvodi</a> > Lukovičasto povrće</small></nav>
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
