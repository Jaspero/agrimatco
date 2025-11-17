<svelte:head>
    <title>Agrimatco | Proizvodi | Lisnato povrće</title>
</svelte:head>

<script>
    import ProductCard from '../../../components/ProductCard.svelte';

    let groups = [
        {
            name: 'Salata',
            items: [
                {
                    title: 'Quione ',
                    description: 'Dobavljač: Vilmorin',
                    image: 'sjeme-povrca/lisnato-povrce/salata/quione.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=14'
                },
                {
                    title: 'Zeralda',
                    description: 'Dobavljač: Vilmorin',
                    image: 'sjeme-povrca/lisnato-povrce/salata/zeralda.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=16'
                },
                {
                    title: 'Epsilone',
                    description: 'Dobavljač: Vilmorin',
                    image: 'sjeme-povrca/lisnato-povrce/salata/epsilone.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=16'
                },
                {
                    title: 'Garone',
                    description: 'Dobavljač: Vilmorin',
                    image: 'sjeme-povrca/lisnato-povrce/salata/garone.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=14'
                },
                {
                    title: 'Maradone',
                    description: 'Dobavljač: Vilmorin',
                    image: 'sjeme-povrca/lisnato-povrce/salata/maradone.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=14'
                },
                {
                    title: 'Minestrone',
                    description: 'Dobavljač: Vilmorin',
                    image: 'sjeme-povrca/lisnato-povrce/salata/minestrone.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=14'
                },
                {
                    title: 'Dragone',
                    description: 'Dobavljač: Vilmorin',
                    image: 'sjeme-povrca/lisnato-povrce/salata/dragone.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=16'
                },
                {
                    title: 'Exquise',
                    description: 'Dobavljač: Vilmorin',
                    image: 'sjeme-povrca/lisnato-povrce/salata/exquise.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=17'
                },
                {
                    title: 'Lirice',
                    description: 'Dobavljač: Vilmorin',
                    image: 'sjeme-povrca/lisnato-povrce/salata/lirice.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=16'
                },
                {
                    title: 'Quefir',
                    description: 'Dobavljač: Vilmorin',
                    image: 'sjeme-povrca/lisnato-povrce/salata/quefir.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=15'
                },
                {
                    title: 'Tonale',
                    description: 'Dobavljač: Vilmorin',
                    image: 'sjeme-povrca/lisnato-povrce/salata/tonale.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=15'
                },
                {
                    title: 'Jukebox',
                    description: 'Dobavljač: Vilmorin',
                    image: 'sjeme-povrca/lisnato-povrce/salata/jukebox.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=15'
                },
                {
                    title: 'Parabela ',
                    description: 'Dobavljač: Vilmorin',
                    image: 'sjeme-povrca/lisnato-povrce/salata/parabella.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=15'
                },
                {
                    title: 'Glassica',
                    description: 'Dobavljač: Vilmorin',
                    image: 'sjeme-povrca/lisnato-povrce/salata/glassica.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=17'
                },
                {
                    title: 'Kokyta - Endivija',
                    description: 'Dobavljač: Isi Sementi',
                    image: 'sjeme-povrca/lisnato-povrce/salata/kokyta-endivija.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=17'
                },
                {
                    title: 'Raris - Endivija',
                    description: 'Dobavljač: Isi Sementi',
                    image: 'sjeme-povrca/lisnato-povrce/salata/raris-endivija.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=17'
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
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=28'
                },
                {
                    title: 'Palla Rossa 6 - Meda',
                    description: 'Dobavljač: Esasem',
                    image: 'sjeme-povrca/lisnato-povrce/radic/palla-rossa-6-meda.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=28'
                },
                {
                    title: 'Rossa di Verona Precoce - Toga',
                    description: 'Dobavljač: Esasem',
                    image: 'sjeme-povrca/lisnato-povrce/radic/rossa-di-verona-precoce-toga.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=28'
                },
            ]
        },
        {
            name: 'Špinat',
            items: [
                {
                    title: 'Helios F1',
                    description: 'Dobavljač: Sakata',
                    image: 'sjeme-povrca/lisnato-povrce/spinat/helios-f1.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=18'
                },
                {
                    title: 'Apollo F1',
                    description: 'Dobavljač: Sakata',
                    image: 'sjeme-povrca/lisnato-povrce/spinat/apollo.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=18'
                },
                {
                    title: 'Rukola Di 2208 F1',
                    description: 'Dobavljač: Esasem',
                    image: 'sjeme-povrca/lisnato-povrce/spinat/rukola.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=18'
                }
            ]
        },
        {
            name: 'Blitva',
            items: [
                {
                    title: 'Candida',
                    description: 'Dobavljač: SAIS',
                    image: 'sjeme-povrca/lisnato-povrce/blitva/candida.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=18'
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
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=20'
                },
                {
                    title: 'Nozomi F1',
                    description: 'Dobavljač: Sakata',
                    image: 'sjeme-povrca/lisnato-povrce/bijeli-kupus/nozomi-f1.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=20'
                },
                {
                    title: 'Supreme Vantage F1',
                    description: 'Dobavljač: Sakata',
                    image: 'sjeme-povrca/lisnato-povrce/bijeli-kupus/supreme-vantage-f1.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=20'
                },
                {
                    title: 'Hyppo F1',
                    description: 'Dobavljač: Sakata',
                    image: 'sjeme-povrca/lisnato-povrce/bijeli-kupus/hyppo-f1.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=20'
                },
                {
                    title: 'Powerslam F1',
                    description: 'Dobavljač: Sakata',
                    image: 'sjeme-povrca/lisnato-povrce/bijeli-kupus/powerslam-f1.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=21'
                },
                {
                    title: 'Monroo F1',
                    description: 'Dobavljač: Sakata',
                    image: 'sjeme-povrca/lisnato-povrce/bijeli-kupus/monroo-f1.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=21'
                },
                {
                    title: 'Coronet F1',
                    description: 'Dobavljač: Sakata',
                    image: 'sjeme-povrca/lisnato-povrce/bijeli-kupus/coronet-f1.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=21'
                },
                {
                    title: 'Saturn F1',
                    description: 'Dobavljač: Sakata',
                    image: 'sjeme-povrca/lisnato-povrce/bijeli-kupus/saturn-f1.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=22'
                },
                {
                    title: 'Accord F1',
                    description: 'Dobavljač: Sakata',
                    image: 'sjeme-povrca/lisnato-povrce/bijeli-kupus/accord.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=21'
                },
                {
                    title: 'Marloo F1',
                    description: 'Dobavljač: Sakata',
                    image: 'sjeme-povrca/lisnato-povrce/bijeli-kupus/marloo-f1.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=22'
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
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=22'
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
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=22'
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
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=23'
                },
                {
                    title: 'Savostar F1',
                    description: 'Dobavljač: United Genetics',
                    image: 'sjeme-povrca/lisnato-povrce/kelj/savostar.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=23'
                },
                {
                    title: 'Providence F1',
                    description: 'Dobavljač: Tozer seeds',
                    image: 'sjeme-povrca/lisnato-povrce/kelj/providence-f1.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=23'
                },
                {
                    title: 'Vanguard F1',
                    description: 'Dobavljač: Tozer seeds',
                    image: 'sjeme-povrca/lisnato-povrce/kelj/vanguard-f1.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=23'
                },
                {
                    title: 'Resolution ',
                    description: 'Dobavljač: Tozer seeds',
                    image: 'sjeme-povrca/lisnato-povrce/kelj/resolution.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=23'
                },
            ]
        }
    ]
</script>

<section class="section">
    <div class="container">
        <nav><small><a  href="/proizvodi">Proizvodi</a> > Lisnato povrće</small></nav>
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
