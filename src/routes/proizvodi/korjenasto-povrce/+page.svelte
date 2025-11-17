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
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=34'
                },
                {
                    title: 'Cheriette F1',
                    description: 'Dobavljač: Sakata',
                    image: 'sjeme-povrca/korjenasto-povrce/rotkvica/cheriette-f1.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=34'
                },
                {
                    title: 'Tinto F1',
                    description: 'Dobavljač: Vilmorin',
                    image: 'sjeme-povrca/korjenasto-povrce/rotkvica/tinto-f1.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=34'
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
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=34'
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
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=34'
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
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=30'
                },
                {
                    title: 'Subito F1',
                    description: 'Dobavljač: Vilmorin',
                    image: 'sjeme-povrca/korjenasto-povrce/mrkva/subito.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=30'
                },
                {
                    title: 'Exelco F1',
                    description: 'Dobavljač: Vilmorin',
                    image: 'sjeme-povrca/korjenasto-povrce/mrkva/exelco-f1.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=30'
                },
                {
                    title: 'Musico F1',
                    description: 'Dobavljač: Vilmorin',
                    image: 'sjeme-povrca/korjenasto-povrce/mrkva/musico-f1.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=31'
                },
                {
                    title: 'Octavo F1',
                    description: 'Dobavljač: Vilmorin',
                    image: 'sjeme-povrca/korjenasto-povrce/mrkva/octavo-f1.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=31'
                },
                {
                    title: 'Soprano F1',
                    description: 'Dobavljač: Vilmorin',
                    image: 'sjeme-povrca/korjenasto-povrce/mrkva/soprano.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=31'
                },
                {
                    title: 'Orchestro F1',
                    description: 'Dobavljač: Vilmorin',
                    image: 'sjeme-povrca/korjenasto-povrce/mrkva/orchestro.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=32'
                },
                {
                    title: 'Bolero F1',
                    description: 'Dobavljač: Vilmorin',
                    image: 'sjeme-povrca/korjenasto-povrce/mrkva/bolero-f1.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=32'
                },
                {
                    title: 'Maestro F1',
                    description: 'Dobavljač: Vilmorin',
                    image: 'sjeme-povrca/korjenasto-povrce/mrkva/maestro-f1.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=32'
                },
                {
                    title: 'Gold Nugget F1',
                    description: 'Dobavljač: Vilmorin',
                    image: 'sjeme-povrca/korjenasto-povrce/mrkva/gold-nugget-f1.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=33'
                },
                {
                    title: 'Taborska zluta',
                    description: 'Dobavljač: Semo',
                    image: 'sjeme-povrca/korjenasto-povrce/mrkva/taborska-zluta.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=33'
                },
                {
                    title: 'Flamenco',
                    description: 'Dobavljač: Vilmorin',
                    image: 'sjeme-povrca/korjenasto-povrce/mrkva/flamenco.JPG',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=33'
                },
                {
                    title: 'Soneto',
                    description: 'Dobavljač: Vilmorin',
                    image: 'sjeme-povrca/korjenasto-povrce/mrkva/soneto-f1.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=31'
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
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=36'
                },
                {
                    title: 'Orbis',
                    description: 'Dobavljač: Semo',
                    image: 'sjeme-povrca/korjenasto-povrce/persin/orbis.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=36'
                },
                {
                    title: 'Jadran',
                    description: 'Dobavljač: Semo',
                    image: 'sjeme-povrca/korjenasto-povrce/persin/jadran.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=36'
                },
                {
                    title: 'Efez',
                    description: 'Dobavljač: Semo',
                    image: 'sjeme-povrca/korjenasto-povrce/persin/efez.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=36'
                },
                {
                    title: 'Gigante',
                    description: 'Dobavljač: Esasem',
                    image: 'sjeme-povrca/korjenasto-povrce/persin/gigante.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=36'
                },
                {
                    title: 'Festival',
                    description: 'Dobavljač: Semo',
                    image: 'sjeme-povrca/korjenasto-povrce/persin/festival.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=36'
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
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=37'
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
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=36'
                },
                {
                    title: 'Javelin',
                    description: 'Dobavljač: Tozer seeds',
                    image: 'sjeme-povrca/korjenasto-povrce/pastrnjak/javelin.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=36'
                }
                ,
                {
                    title: 'Tall Utah',
                    description: 'Dobavljač: ESASEM',
                    image: 'sjeme-povrca/korjenasto-povrce/pastrnjak/tall-utah.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=36'
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
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=42'
                },
                {
                    title: 'Cardeal F1',
                    description: 'Dobavljač: Sakata',
                    image: 'sjeme-povrca/korjenasto-povrce/cikla/cardeal-f1.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=42'
                },
                {
                    title: 'Rodina F1',
                    description: 'Dobavljač: Sakata',
                    image: 'sjeme-povrca/korjenasto-povrce/cikla/rodina-f1.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=42'
                }
            ]
        },
    ]
</script>

<section class="section">
    <div class="container">
        <nav><small><a  href="/proizvodi">Proizvodi</a> > Korjenasto povrće</small></nav>
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
