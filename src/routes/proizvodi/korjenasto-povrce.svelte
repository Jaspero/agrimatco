<svelte:head>
    <title>Agrimatco | Proizvodi | Korjenasto povrće</title>
</svelte:head>

<script>
    import ProductCard from '../../components/ProductCard.svelte';

    let groups = [
        {
            name: 'Rotkvica',
            items: [
                {
                    title: 'Crunchy King F1',
                    description: 'Dobavljač: Sakata',
                    image: 'sjeme-povrca/korjenasto-povrce/rotkvica/crunchy-king-f1.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=38'
                },
                {
                    title: 'Crunchy Royale F1',
                    description: 'Dobavljač: Sakata',
                    image: 'sjeme-povrca/korjenasto-povrce/rotkvica/crunchy-royale-f1.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=38'
                },
                {
                    title: 'Cheriette F1',
                    description: 'Dobavljač: Sakata',
                    image: 'sjeme-povrca/korjenasto-povrce/rotkvica/cheriette-f1.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=38'
                },
                {
                    title: 'Tinto F1',
                    description: 'Dobavljač: Vilmorin',
                    image: 'sjeme-povrca/korjenasto-povrce/rotkvica/tinto-f1.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=38'
                }
            ]
        },
        {
            name: 'Korabica',
            items: [
                {
                    title: 'Quick Star F1',
                    description: 'Dobavljač: Sakata',
                    image: 'sjeme-povrca/korjenasto-povrce/korabica/quick-star-f1.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=38'
                }
            ]
        },
        {
            name: 'Crna rotkva',
            items: [
                {
                    title: 'Panter',
                    description: 'Dobavljač: Semo',
                    image: 'sjeme-povrca/korjenasto-povrce/crna-rotkva/panter.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=38'
                }
            ]
        },
        {
            name: 'Mrkva',
            items: [
                {
                    title: 'Presto F1',
                    description: 'Dobavljač: Vilmorin',
                    image: 'sjeme-povrca/korjenasto-povrce/mrkva/presto-f1.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=34'
                },
                {
                    title: 'Subito F1',
                    description: 'Dobavljač: Vilmorin',
                    image: 'sjeme-povrca/korjenasto-povrce/mrkva/subito-f1.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=34'
                },
                {
                    title: 'Exelco F1',
                    description: 'Dobavljač: Vilmorin',
                    image: 'sjeme-povrca/korjenasto-povrce/mrkva/exelco-f1.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=34'
                },
                {
                    title: 'Musico F1',
                    description: 'Dobavljač: Vilmorin',
                    image: 'sjeme-povrca/korjenasto-povrce/mrkva/musico-f1.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=35'
                },
                {
                    title: 'Octavo F1',
                    description: 'Dobavljač: Vilmorin',
                    image: 'sjeme-povrca/korjenasto-povrce/mrkva/octavo-f1.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=35'
                },
                {
                    title: 'Soprano F1',
                    description: 'Dobavljač: Vilmorin',
                    image: 'sjeme-povrca/korjenasto-povrce/mrkva/soprano.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=35'
                },
                {
                    title: 'Bolero F1',
                    description: 'Dobavljač: Vilmorin',
                    image: 'sjeme-povrca/korjenasto-povrce/mrkva/bolero-f1.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=36'
                },
                {
                    title: 'Maestro F1',
                    description: 'Dobavljač: Vilmorin',
                    image: 'sjeme-povrca/korjenasto-povrce/mrkva/maestro-f1.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=36'
                },
                {
                    title: 'Gold Nugget F1',
                    description: 'Dobavljač: Vilmorin',
                    image: 'sjeme-povrca/korjenasto-povrce/mrkva/gold-nugget-f1.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=37'
                },
                {
                    title: 'Taborska zluta',
                    description: 'Dobavljač: Semo',
                    image: 'sjeme-povrca/korjenasto-povrce/mrkva/taborska-zluta.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=37'
                },
                {
                    title: 'Flamenco',
                    description: 'Dobavljač: Vilmorin',
                    image: 'sjeme-povrca/korjenasto-povrce/mrkva/flamenco.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=36'
                },
                {
                    title: 'Soneto',
                    description: 'Dobavljač: Vilmorin',
                    image: 'sjeme-povrca/korjenasto-povrce/mrkva/soneto.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=37'
                }
            ]
        },
        {
            name: 'Peršin',
            items: [
                {
                    title: 'Atika',
                    description: 'Dobavljač: Semo',
                    image: 'sjeme-povrca/korjenasto-povrce/persin/atika.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=40'
                },
                {
                    title: 'Orbis',
                    description: 'Dobavljač: Semo',
                    image: 'sjeme-povrca/korjenasto-povrce/persin/orbis.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=40'
                },
                {
                    title: 'Jadran',
                    description: 'Dobavljač: Semo',
                    image: 'sjeme-povrca/korjenasto-povrce/persin/jadran.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=40'
                },
                {
                    title: 'Efez',
                    description: 'Dobavljač: Semo',
                    image: 'sjeme-povrca/korjenasto-povrce/persin/efez.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=40'
                },
                {
                    title: 'Gigante',
                    description: 'Dobavljač: Esasem',
                    image: 'sjeme-povrca/korjenasto-povrce/persin/gigante.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=40'
                },
                {
                    title: 'Festival',
                    description: 'Dobavljač: Semo',
                    image: 'sjeme-povrca/korjenasto-povrce/persin/festival.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=40'
                }
            ]
        },
        {
            name: 'Celer',
            items: [
                {
                    title: 'Neon',
                    description: 'Dobavljač: Semo',
                    image: 'sjeme-povrca/korjenasto-povrce/celer/neon.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=41'
                }
            ]
        },
        {
            name: 'Pastrnjak',
            items: [
                {
                    title: 'Bielas',
                    description: 'Dobavljač: Semo',
                    image: 'sjeme-povrca/korjenasto-povrce/pastrnjak/bielas.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=41'
                },
                {
                    title: 'Javelin',
                    description: 'Dobavljač: Tozer seeds',
                    image: 'sjeme-povrca/korjenasto-povrce/pastrnjak/javelin.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=41'
                }
                ,
                {
                    title: 'Tall Utah',
                    description: 'Dobavljač: ESASEM',
                    image: 'sjeme-povrca/korjenasto-povrce/pastrnjak/tall-utah.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=41'
                }
            ]
        },
        {
            name: 'Cikla',
            items: [
                {
                    title: 'Kestrel F1',
                    description: 'Dobavljač: Sakata',
                    image: 'sjeme-povrca/korjenasto-povrce/cikla/kestrel-f1.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=46'
                },
                {
                    title: 'Cardeal F1',
                    description: 'Dobavljač: Sakata',
                    image: 'sjeme-povrca/korjenasto-povrce/cikla/cardeal-f1.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=46'
                },
                {
                    title: 'Rodina F1',
                    description: 'Dobavljač: Sakata',
                    image: 'sjeme-povrca/korjenasto-povrce/cikla/rodina-f1.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=46'
                }
            ]
        },
    ]
</script>

<section class="section">
    <div class="container">
        <nav><small><a rel="prefetch" href="proizvodi">Proizvodi</a> > Korjenasto povrće</small></nav>
        <h1>Korjenasto povrće</h1>
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
