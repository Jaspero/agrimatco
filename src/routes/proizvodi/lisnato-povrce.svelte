<svelte:head>
    <title>Agrimatco | Proizvodi | Lisnato povrće</title>
</svelte:head>

<script>
    import ProductCard from '../../components/ProductCard.svelte';

    let groups = [
        {
            name: 'Salata',
            items: [
                {
                    title: 'Fripone',
                    description: 'Dobavljač: Vilmorin',
                    image: 'sjeme-povrca/lisnato-povrce/salata/fripone.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=14'
                },
                {
                    title: 'Quione ',
                    description: 'Dobavljač: Vilmorin',
                    image: 'sjeme-povrca/lisnato-povrce/salata/quione.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=14'
                },
                {
                    title: 'Arleti',
                    description: 'Dobavljač: Vilmorin',
                    image: 'sjeme-povrca/lisnato-povrce/salata/arletti.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=15'
                },
                {
                    title: 'Alcaline',
                    description: 'Dobavljač: Vilmorin',
                    image: 'sjeme-povrca/lisnato-povrce/salata/alcaline.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=15'
                },
                {
                    title: 'Zeralda',
                    description: 'Dobavljač: Vilmorin',
                    image: 'sjeme-povrca/lisnato-povrce/salata/zeralda.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=18'
                },
                {
                    title: 'Epsilone',
                    description: 'Dobavljač: Vilmorin',
                    image: 'sjeme-povrca/lisnato-povrce/salata/epsilone.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=18'
                },
                {
                    title: 'Garone',
                    description: 'Dobavljač: Vilmorin',
                    image: 'sjeme-povrca/lisnato-povrce/salata/garone.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=14'
                },
                {
                    title: 'Maradone',
                    description: 'Dobavljač: Vilmorin',
                    image: 'sjeme-povrca/lisnato-povrce/salata/maradone.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=14'
                },
                {
                    title: 'Minestrone',
                    description: 'Dobavljač: Vilmorin',
                    image: 'sjeme-povrca/lisnato-povrce/salata/minestrone.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=15'
                },
                {
                    title: 'Quelio',
                    description: 'Dobavljač: Vilmorin',
                    image: 'sjeme-povrca/lisnato-povrce/salata/quelio.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=16'
                },
                {
                    title: 'Flambine',
                    description: 'Dobavljač: Vilmorin',
                    image: 'sjeme-povrca/lisnato-povrce/salata/flambine.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=16'
                },
                {
                    title: 'Bacchus',
                    description: 'Dobavljač: Vilmorin',
                    image: 'sjeme-povrca/lisnato-povrce/salata/bacchus.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=16'
                },
                {
                    title: 'Amalizia',
                    description: 'Dobavljač: Vilmorin',
                    image: 'sjeme-povrca/lisnato-povrce/salata/amalizia.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=15'
                },
                {
                    title: 'Dragone',
                    description: 'Dobavljač: Vilmorin',
                    image: 'sjeme-povrca/lisnato-povrce/salata/dragone.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=18'
                },
                {
                    title: 'Exquise',
                    description: 'Dobavljač: Vilmorin',
                    image: 'sjeme-povrca/lisnato-povrce/salata/exquise.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=19'
                },
                {
                    title: 'Lirice',
                    description: 'Dobavljač: Vilmorin',
                    image: 'sjeme-povrca/lisnato-povrce/salata/lirice.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=19'
                },
                {
                    title: 'Alyne ',
                    description: 'Dobavljač: ESASEM',
                    image: 'sjeme-povrca/lisnato-povrce/salata/allyne.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=19'
                },
                {
                    title: 'Tonale',
                    description: 'Dobavljač: Vilmorin',
                    image: 'sjeme-povrca/lisnato-povrce/salata/tonale.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=17'
                },
                {
                    title: 'Jukebox',
                    description: 'Dobavljač: Vilmorin',
                    image: 'sjeme-povrca/lisnato-povrce/salata/jukebox.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=17'
                },
                {
                    title: 'Pursuit',
                    description: 'Dobavljač: Vilmorin',
                    image: 'sjeme-povrca/lisnato-povrce/salata/pursuit.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=20'
                },
                {
                    title: 'Parabela ',
                    description: 'Dobavljač: Vilmorin',
                    image: 'sjeme-povrca/lisnato-povrce/salata/parabella.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=17'
                },
                {
                    title: 'Rocambole  ',
                    description: 'Dobavljač: Vilmorin',
                    image: 'sjeme-povrca/lisnato-povrce/salata/rocambole.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=17'
                },
                {
                    title: 'Glassica',
                    description: 'Dobavljač: Vilmorin',
                    image: 'sjeme-povrca/lisnato-povrce/salata/glassica.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=20'
                },
                {
                    title: 'Kokyta - Endivija',
                    description: 'Dobavljač: Isi Sementi',
                    image: 'sjeme-povrca/lisnato-povrce/salata/kokyta-endivija.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=20'
                },
                {
                    title: 'Raris - Endivija',
                    description: 'Dobavljač: Isi Sementi',
                    image: 'sjeme-povrca/lisnato-povrce/salata/raris-endivija.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=20'
                }
            ]
        },
        {
            name: 'Radič',
            items: [
                {
                    title: 'Palla Rossa 5 - Preda',
                    description: 'Dobavljač: Esasem',
                    image: 'sjeme-povrca/lisnato-povrce/radic/palla-rossa-5-preda.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=21'
                },
                {
                    title: 'Palla Rossa 6 - Meda',
                    description: 'Dobavljač: Esasem',
                    image: 'sjeme-povrca/lisnato-povrce/radic/palla-rossa-6-meda.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=21'
                },
                {
                    title: 'Rossa di Verona Precoce - Toga',
                    description: 'Dobavljač: Esasem',
                    image: 'sjeme-povrca/lisnato-povrce/radic/rossa-di-verona-precoce-toga.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=21'
                },
                {
                    title: 'Rossa di Treviso Precoce - Trevor',
                    description: 'Dobavljač: Esasem',
                    image: 'sjeme-povrca/lisnato-povrce/radic/rossa-di-treviso-precoce-trevor.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=21'
                }
            ]
        },
        {
            name: 'Špinat',
            items: [
                {
                    title: 'Helios F1',
                    description: 'Dobavljač: Sakata',
                    image: 'sjeme-povrca/lisnato-povrce/spinat/helios-f1.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=22'
                },
            ]
        },
        {
            name: 'Blitva',
            items: [
                {
                    title: 'Candida',
                    description: 'Dobavljač: SAIS',
                    image: 'sjeme-povrca/lisnato-povrce/blitva/candida.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=22'
                },
            ]
        },
        {
            name: 'Bijeli kupus',
            items: [
                {
                    title: 'Elisa F1',
                    description: 'Dobavljač: Sakata',
                    image: 'sjeme-povrca/lisnato-povrce/bijeli-kupus/elisa-f1.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=24'
                },
                {
                    title: 'Delight Ball F1',
                    description: 'Dobavljač: Mikado',
                    image: 'sjeme-povrca/lisnato-povrce/bijeli-kupus/delight-ball-f1.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=24'
                },
                {
                    title: 'Nozomi F1',
                    description: 'Dobavljač: Sakata',
                    image: 'sjeme-povrca/lisnato-povrce/bijeli-kupus/nozomi-f1.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=24'
                },
                {
                    title: 'Supreme Vantage F1',
                    description: 'Dobavljač: Sakata',
                    image: 'sjeme-povrca/lisnato-povrce/bijeli-kupus/supreme-vantage-f1.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=24'
                },
                {
                    title: 'Hyppo F1',
                    description: 'Dobavljač: Sakata',
                    image: 'sjeme-povrca/lisnato-povrce/bijeli-kupus/hyppo-f1.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=25'
                },
                {
                    title: 'Powerslam F1',
                    description: 'Dobavljač: Sakata',
                    image: 'sjeme-povrca/lisnato-povrce/bijeli-kupus/powerslam-f1.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=25'
                },
                {
                    title: 'Monroo F1',
                    description: 'Dobavljač: Sakata',
                    image: 'sjeme-povrca/lisnato-povrce/bijeli-kupus/monroo-f1.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=25'
                },
                {
                    title: 'Coronet F1',
                    description: 'Dobavljač: Sakata',
                    image: 'sjeme-povrca/lisnato-povrce/bijeli-kupus/coronet-f1.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=25'
                },
                {
                    title: 'Saturn F1',
                    description: 'Dobavljač: Sakata',
                    image: 'sjeme-povrca/lisnato-povrce/bijeli-kupus/saturn-f1.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=26'
                },
                {
                    title: 'Marloo F1',
                    description: 'Dobavljač: Sakata',
                    image: 'sjeme-povrca/lisnato-povrce/bijeli-kupus/marloo-f1.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=26'
                },
            ]
        },
        {
            name: 'Crveni kupus',
            items: [
                {
                    title: 'Red Jewel F1',
                    description: 'Dobavljač: Sakata',
                    image: 'sjeme-povrca/lisnato-povrce/crveni-kupus/red-jewel-f1.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=26'
                }
            ]
        },
        {
            name: 'Kineski kupus',
            items: [
                {
                    title: 'Kiseki F1',
                    description: 'Dobavljač: Sakata',
                    image: 'sjeme-povrca/lisnato-povrce/kineski-kupus/kiseki-f1.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=26'
                }
            ]
        },
        {
            name: 'Kelj',
            items: [
                {
                    title: 'Estoril F1',
                    description: 'Dobavljač: Sakata',
                    image: 'sjeme-povrca/lisnato-povrce/kelj/estoril-f1.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=27'
                },
                {
                    title: 'Savostar F1',
                    description: 'Dobavljač: United Genetics',
                    image: 'sjeme-povrca/lisnato-povrce/kelj/savostar.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=27'
                },
                {
                    title: 'Providence F1',
                    description: 'Dobavljač: Tozer seeds',
                    image: 'sjeme-povrca/lisnato-povrce/kelj/providence-f1.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=27'
                },
                {
                    title: 'Vanguard F1',
                    description: 'Dobavljač: Tozer seeds',
                    image: 'sjeme-povrca/lisnato-povrce/kelj/vanguard-f1.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=27'
                },
                {
                    title: 'Resolution ',
                    description: 'Dobavljač: Tozer seeds',
                    image: 'sjeme-povrca/lisnato-povrce/kelj/resolution.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=27'
                },
            ]
        }
    ]
</script>

<section class="section">
    <div class="container">
        <nav><small><a rel="prefetch" href="proizvodi">Proizvodi</a> > Lisnato povrće</small></nav>
        <h1>Lisnato povrće</h1>
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
