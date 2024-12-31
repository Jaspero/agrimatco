<svelte:head>
    <title>Agrimatco | Proizvodi | Plodno povrće</title>
</svelte:head>

<script>
    import ProductCard from '../../components/ProductCard.svelte';

    let groups = [
        {
            name: 'Lubenica',
            items: [
                {
                    title: 'Early Samantha F1',
                    description: 'Dobavljač: United Genetics',
                    image: 'sjeme-povrca/plodno-povrce/lubenica/early-samantha-f1.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=44'
                },
                {
                    title: 'Early Crimara F1',
                    description: 'Dobavljač: United Genetics',
                    image: 'sjeme-povrca/plodno-povrce/lubenica/early-crimara-f1.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=44'
                },
                {
                    title: 'Karnakata F1',
                    description: 'Dobavljač: United Genetics',
                    image: 'sjeme-povrca/plodno-povrce/lubenica/karnakata-f1.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=44'
                },
                {
                    title: 'Samantha F1',
                    description: 'Dobavljač: United Genetics',
                    image: 'sjeme-povrca/plodno-povrce/lubenica/samantha-f1.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=45'
                },
                {
                    title: 'Marbella F1',
                    description: 'Dobavljač: United Genetics',
                    image: 'sjeme-povrca/plodno-povrce/lubenica/marbella-f1.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=45'
                },
                {
                    title: 'Prismatica F1',
                    description: 'Dobavljač: United Genetics',
                    image: 'sjeme-povrca/plodno-povrce/lubenica/prismatica-f1.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=45'
                },
                {
                    title: 'Odyssey F1',
                    description: 'Dobavljač: Sakata',
                    image: 'sjeme-povrca/plodno-povrce/lubenica/odyssey-f1.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=46'
                },
                {
                    title: 'Celest F1',
                    description: 'Dobavljač: Sakata',
                    image: 'sjeme-povrca/plodno-povrce/lubenica/celest.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=46'
                },
                {
                    title: 'Lusia F1',
                    description: 'Dobavljač: Vilmorin',
                    image: 'sjeme-povrca/plodno-povrce/lubenica/lusia-f1.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=47'
                },
                {
                    title: 'Romeria F1',
                    description: 'Dobavljač: United Genetics',
                    image: 'sjeme-povrca/plodno-povrce/lubenica/romeria-f1.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=47'
                },
                {
                    title: 'Obla F1',
                    description: 'Dobavljač: Esasem',
                    image: 'sjeme-povrca/plodno-povrce/lubenica/obla-f1.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=46'
                },
                {
                    title: 'Ketty F1',
                    description: 'Dobavljač: Esasem',
                    image: 'sjeme-povrca/plodno-povrce/lubenica/ketty.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=47'
                },
                {
                    title: 'Minnie F1',
                    description: 'Dobavljač: United Genetics)',
                    image: 'sjeme-povrca/plodno-povrce/lubenica/ketty.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=47'
                }
            ]
        },
        {
            name: 'Podloga za cijepljenje lubenica',
            items: [
                {
                    title: 'Routpower',
                    description: 'Dobavljač: Sakata',
                    image: 'sjeme-povrca/plodno-povrce/podloga-za-cijeplenje-lubenica/routpower.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=48'
                },
                {
                    title: 'Polifemo',
                    description: 'Dobavljač: Sakata',
                    image: 'sjeme-povrca/plodno-povrce/podloga-za-cijeplenje-lubenica/polifemo.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=48'
                }
            ]
        },
        {
            name: 'Dinja',
            items: [
                {
                    title: 'Wrangler F1',
                    description: 'Dobavljač: SAIS',
                    image: 'sjeme-povrca/plodno-povrce/dinja/wrangler-f1.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=48'
                },
                {
                    title: 'Portento',
                    description: 'Dobavljač: United Genetics',
                    image: 'sjeme-povrca/plodno-povrce/dinja/portento.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=49'
                },
                {
                    title: 'Jannet',
                    description: 'Dobavljač: Esasem',
                    image: 'sjeme-povrca/plodno-povrce/dinja/jannet.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=49'
                },
                {
                    title: 'Varenne F1',
                    description: 'Dobavljač: Mira Seeds',
                    image: 'sjeme-povrca/plodno-povrce/dinja/jannet.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=49'
                },
            ]
        },
        {
            name: 'Tikva',
            items: [
                {
                    title: 'Ariel F1',
                    description: 'Dobavljač: Sakata',
                    image: 'sjeme-povrca/plodno-povrce/tikva/ariel-f1.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=52'
                },
                {
                    title: 'Pluto',
                    description: 'Dobavljač: Sakata',
                    image: 'sjeme-povrca/plodno-povrce/tikva/pluto.png',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=52'
                },
                {
                    title: 'Veenas F1',
                    description: 'Dobavljač: Sakata',
                    image: 'sjeme-povrca/plodno-povrce/tikva/veenas-f1.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=52'
                },
                {
                    title: 'Yellowboys F1',
                    description: 'Dobavljač: Semo',
                    image: 'sjeme-povrca/plodno-povrce/tikva/yellowboys-f1.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=52'
                },
                {
                    title: 'Yellowgirls F1',
                    description: 'Dobavljač: Semo',
                    image: 'sjeme-povrca/plodno-povrce/tikva/yellowgirls-f1.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=52'
                },
                {
                    title: 'Hokkaido Orange',
                    description: 'Dobavljač: Semo',
                    image: 'sjeme-povrca/plodno-povrce/tikva/hokkaido-orange.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=53'
                },
                {
                    title: 'Delica F1',
                    description: 'Dobavljač: Semo',
                    image: 'sjeme-povrca/plodno-povrce/tikva/delica-f1.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=53'
                },
                {
                    title: 'Crown Prince F1',
                    description: 'Dobavljač: Sakata',
                    image: 'sjeme-povrca/plodno-povrce/tikva/crown-prince-f1.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=53'
                },
                {
                    title: 'Quintale Seme Giallo',
                    description: 'Dobavljač: SAIS',
                    image: 'sjeme-povrca/plodno-povrce/tikva/quintale-seme.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=53'
                },
                {
                    title: 'Colinky ',
                    description: 'Dobavljač: Sakata',
                    image: 'sjeme-povrca/plodno-povrce/tikva/colinky.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=53'
                }
            ]
        },
        {
            name: 'Tikvica',
            items: [
                {
                    title: 'Ascona',
                    description: 'Dobavljač: Sakata',
                    image: 'sjeme-povrca/plodno-povrce/tikvica/ascona.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=51'
                },
                {
                    title: 'Tendor F1',
                    description: 'Dobavljač: Vilmorin',
                    image: 'sjeme-povrca/plodno-povrce/tikvica/tendor-f1.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=51'
                },
                {
                    title: 'Black Star F1',
                    description: 'Dobavljač: United Genetics',
                    image: 'sjeme-povrca/plodno-povrce/tikvica/black-star.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=51'
                }
            ]
        },
        {
            name: 'Rajčica',
            items: [
                {
                    title: 'Signora F1',
                    description: 'Dobavljač: Esasem',
                    image: 'sjeme-povrca/plodno-povrce/rajcica/signora-f1.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=56'
                },
                {
                    title: 'Yety F1',
                    description: 'Dobavljač: Sakata',
                    image: 'sjeme-povrca/plodno-povrce/rajcica/yety-f1.jpg',
                    link: 'katalozi/sjeme-povrca-2025.pdf#page=56'
                },
                {
                    title: 'Amerigo F1',
                    description: 'Dobavljač: Sakata',
                    image: 'sjeme-povrca/plodno-povrce/rajcica/amerigo-f1.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=60'
                },
                {
                    title: 'Rosalba F1',
                    description: 'Dobavljač: Esasem',
                    image: 'sjeme-povrca/plodno-povrce/rajcica/rosalba-f1.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=61'
                },
                {
                    title: 'VP1 F1',
                    description: 'Dobavljač: Vilmorin',
                    image: 'sjeme-povrca/plodno-povrce/rajcica/vp1-f1.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=61'
                },
                {
                    title: 'VP2 F1',
                    description: 'Dobavljač: Vilmorin',
                    image: 'sjeme-povrca/plodno-povrce/rajcica/vp2.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=61'
                },
                {
                    title: 'Hayet F1',
                    description: 'Dobavljač: Sakata',
                    image: 'sjeme-povrca/plodno-povrce/rajcica/hayet.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page= 60'
                },
                {
                    title: 'Pink Impression F1',
                    description: 'Dobavljač: Sakata',
                    image: 'sjeme-povrca/plodno-povrce/rajcica/pink-impression-f1.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=61'
                },
                {
                    title: 'Fuji Pink F1',
                    description: 'Dobavljač: Sakata',
                    image: 'sjeme-povrca/plodno-povrce/rajcica/fuji-pink-f1.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=62'
                },
                {
                    title: 'Ricciolo',
                    description: 'Dobavljač: United Genetics',
                    image: 'sjeme-povrca/plodno-povrce/rajcica/ricciolo.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=62'
                },
                {
                    title: 'Jangcy F1',
                    description: 'Dobavljač: Vilmorin',
                    image: 'sjeme-povrca/plodno-povrce/rajcica/jangcy.JPG',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=62'
                },
                {
                    title: 'Tojiro F1',
                    description: 'Dobavljač: United Genetics',
                    image: 'sjeme-povrca/plodno-povrce/rajcica/tojiro.png',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=62'
                },
                {
                    title: 'Sauron',
                    description: 'Dobavljač: Esasem',
                    image: 'sjeme-povrca/plodno-povrce/rajcica/sauron-f1.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=62'
                },
                {
                    title: 'San Remo F1',
                    description: 'Dobavljač: United Genetics',
                    image: 'sjeme-povrca/plodno-povrce/rajcica/san-remo-f1.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=62'
                },
                {
                    title: 'Belmonte F1',
                    description: 'Dobavljač: Esasem',
                    image: 'sjeme-povrca/plodno-povrce/rajcica/belmonte.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=63'
                },
                {
                    title: 'Cappuccino F!',
                    description: 'Dobavljač: SAIS',
                    image: 'sjeme-povrca/plodno-povrce/rajcica/cappuccino.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=63'
                },
                {
                    title: 'Cornabel F1',
                    description: 'Dobavljač: Vilmorin',
                    image: 'sjeme-povrca/plodno-povrce/rajcica/cornabel.JPG',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=63'
                },
                {
                    title: 'Prezioso F1',
                    description: 'Dobavljač: Esasem',
                    image: 'sjeme-povrca/plodno-povrce/rajcica/prezioso-f1.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=64'
                },
                {
                    title: 'Star Gold F1',
                    description: 'Dobavljač: Esasem',
                    image: 'sjeme-povrca/plodno-povrce/rajcica/star-gold.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=64'
                },
                {
                    title: 'Porpora F1',
                    description: 'Dobavljač: Esasem',
                    image: 'sjeme-povrca/plodno-povrce/rajcica/porpora-f1.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=64'
                },
                {
                    title: 'Lobello F1',
                    description: 'Dobavljač: Esasem',
                    image: 'sjeme-povrca/plodno-povrce/rajcica/lobello-f1.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=64'
                },
                {
                    title: 'Collina F1',
                    description: 'Dobavljač: Esasem',
                    image: 'sjeme-povrca/plodno-povrce/rajcica/collina-f1.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=64'
                },
                {
                    title: 'Napika F1',
                    description: 'Dobavljač: Esasem',
                    image: 'sjeme-povrca/plodno-povrce/rajcica/napika-f1.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=64'
                },
                {
                    title: 'Big Rio F1',
                    description: 'Dobavljač: United Genetics',
                    image: 'sjeme-povrca/plodno-povrce/rajcica/big-rio.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=65'
                },
                {
                    title: 'Templar F1',
                    description: 'Dobavljač: Isi Sementi',
                    image: 'sjeme-povrca/plodno-povrce/rajcica/templar.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=65'
                },
                {
                    title: 'Rossano F1',
                    description: 'Dobavljač: Esasem',
                    image: 'sjeme-povrca/plodno-povrce/rajcica/rossano-f1.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=65'
                },
                {
                    title: 'Troy F1 (Linda F1)',
                    description: 'Dobavljač: Sakata',
                    image: 'sjeme-povrca/plodno-povrce/rajcica/troy-f1.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=65'
                },
                {
                    title: 'Kero F1',
                    description: 'Dobavljač: Esasem',
                    image: 'sjeme-povrca/plodno-povrce/rajcica/kero-f1.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=65'
                }
            ]
        },
        {
            name: 'Paprika',
            items: [
                {
                    title: 'Bernita F1',
                    description: 'Dobavljač: Duna-r',
                    image: 'sjeme-povrca/plodno-povrce/paprika/bernita-f1.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=67'
                },
                {
                    title: 'Bibic F1',
                    description: 'Dobavljač: Duna-r',
                    image: 'sjeme-povrca/plodno-povrce/paprika/bibic-f1.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=67'
                },
                {
                    title: 'Bagoly F1',
                    description: 'Dobavljač: Duna-r',
                    image: 'sjeme-povrca/plodno-povrce/paprika/bagoly-f1.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=67'
                },
                {
                    title: 'Bobita F1',
                    description: 'Dobavljač: Duna-r',
                    image: 'sjeme-povrca/plodno-povrce/paprika/bobita-f1.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=68'
                },
                {
                    title: 'Lisenka F1',
                    description: 'Dobavljač: Duna-r',
                    image: 'sjeme-povrca/plodno-povrce/paprika/lisenka-f1.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=68'
                },
                {
                    title: 'Ester F1',
                    description: 'Dobavljač: Duna-r',
                    image: 'sjeme-povrca/plodno-povrce/paprika/ester-f1.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=71'
                },
                {
                    title: 'Szalva  F1',
                    description: 'Dobavljač: Duna-r',
                    image: 'sjeme-povrca/plodno-povrce/paprika/szalva.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=71'
                },
                {
                    title: 'Spartaco F1',
                    description: 'Dobavljač: Esasem',
                    image: 'sjeme-povrca/plodno-povrce/paprika/spartaco-f1.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=68'
                },
                {
                    title: 'Lake F1',
                    description: 'Dobavljač: Sakata',
                    image: 'sjeme-povrca/plodno-povrce/paprika/lake-f1.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=69'
                },
                {
                    title: 'Salana F1',
                    description: 'Dobavljač: Sakata',
                    image: 'sjeme-povrca/plodno-povrce/paprika/salana-f1.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=69'
                },
                {
                    title: 'Bodrog F1',
                    description: 'Dobavljač: DUNA',
                    image: 'sjeme-povrca/plodno-povrce/paprika/bodrog.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=70'
                },
                {
                    title: 'Emese  F1',
                    description: 'Dobavljač: DUNA',
                    image: 'sjeme-povrca/plodno-povrce/paprika/emmese.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=70'
                },
                {
                    title: 'Sobri   F1',
                    description: 'Dobavljač: DUNA',
                    image: 'sjeme-povrca/plodno-povrce/paprika/sobri.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=70'
                },
                {
                    title: 'Rafaelus F1',
                    description: 'Dobavljač: Semo',
                    image: 'sjeme-povrca/plodno-povrce/paprika/rafaelus.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=72'
                },
                {
                    title: 'Kadet F1',
                    description: 'Dobavljač: Duna-r',
                    image: 'sjeme-povrca/plodno-povrce/paprika/kadet-f1.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=72'
                },
                {
                    title: 'Csango F1',
                    description: 'Dobavljač: Duna-r',
                    image: 'sjeme-povrca/plodno-povrce/paprika/csango-f1.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=72'
                },
                {
                    title: 'Archivarius F1 (D1611/961)',
                    description: 'Dobavljač: Duna-r',
                    image: 'sjeme-povrca/plodno-povrce/paprika/archivarius-f1.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=72'
                },
                {
                    title: 'Toldi  F1',
                    description: 'Dobavljač: Duna-r',
                    image: 'sjeme-povrca/plodno-povrce/paprika/toldi.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=73'
                },
                {
                    title: 'Ohnivec',
                    description: 'Dobavljač: SEMO',
                    image: 'sjeme-povrca/plodno-povrce/paprika/ohnivec-1.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=73'
                },
                {
                    title: 'Spriralus',
                    description: 'Dobavljač: SEMO',
                    image: 'sjeme-povrca/plodno-povrce/paprika/spiralus-1.JPG',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=73'
                },
                {
                    title: 'Palivec',
                    description: 'Dobavljač: SEMO',
                    image: 'sjeme-povrca/plodno-povrce/paprika/palivec-1.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=73'
                }
            ]
        },
        {
            name: 'Podloga za papriku',
            items: [
                {
                    title: 'Rocal F1',
                    description: 'Dobavljač: ESASEM',
                    image: 'sjeme-povrca/plodno-povrce/paprika/rocal.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=71'
                },
            ]
        },
        {
            name: 'Krastavac',
            items: [
                {
                    title: 'Anya  F1',
                    description: 'Dobavljač: Semo',
                    image: 'sjeme-povrca/plodno-povrce/krastavac/anya.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=74'
                },
                {
                    title: 'Triunfo F1',
                    description: 'Dobavljač: Sakata',
                    image: 'sjeme-povrca/plodno-povrce/krastavac/triunfo-f1.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=74'
                },
                {
                    title: 'Kung Fu F1',
                    description: 'Dobavljač: Sakata',
                    image: 'sjeme-povrca/plodno-povrce/krastavac/kung-fu-f1.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=74'
                },
                {
                    title: 'Ronda F1',
                    description: 'Dobavljač: Sakata',
                    image: 'sjeme-povrca/plodno-povrce/krastavac/ronda-f1.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=74'
                },
                {
                    title: 'Goghen F1',
                    description: 'Dobavljač: Esasem',
                    image: 'sjeme-povrca/plodno-povrce/krastavac/goghen-f1.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=74'
                }
            ]
        },
        {
            name: 'Patliđan',
            items: [
                {
                    title: 'Clelia F1',
                    description: 'Dobavljač: Esasem',
                    image: 'sjeme-povrca/plodno-povrce/patlidan/clelia-f1.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=76'
                },
                {
                    title: 'Mirval F1',
                    description: 'Dobavljač: Vilmorin',
                    image: 'sjeme-povrca/plodno-povrce/patlidan/mirval-f1.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=76'
                },
                {
                    title: 'Nadia F1',
                    description: 'Dobavljač: Vilmorin',
                    image: 'sjeme-povrca/plodno-povrce/patlidan/nadia-f1.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=76'
                }
            ]
        },
        {
            name: 'Kukuruz šećerac',
            items: [
                {
                    title: 'Kiara F1',
                    description: 'Dobavljač: Vilmorin',
                    image: 'sjeme-povrca/plodno-povrce/kukuruz-secerac/kiara-f1.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=77'
                },
                {
                    title: 'Kuatuor F1',
                    description: 'Dobavljač: Vilmorin',
                    image: 'sjeme-povrca/plodno-povrce/kukuruz-secerac/kuatuor-f1.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=78'
                },
                {
                    title: 'Rustler F1',
                    description: 'Dobavljač: Vilmorin',
                    image: 'sjeme-povrca/plodno-povrce/kukuruz-secerac/rustler-f1.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=77'
                },
                {
                    title: 'HMX9388S (Klondike F1)',
                    description: 'Dobavljač: Vilmorin',
                    image: 'sjeme-povrca/plodno-povrce/kukuruz-secerac/klondike-f1.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=78'
                },
                {
                    title: 'Kinze F1',
                    description: 'Dobavljač: Vilmorin',
                    image: 'sjeme-povrca/plodno-povrce/kukuruz-secerac/kinze-f1.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=77'
                },
                {
                    title: 'Turbo F1',
                    description: 'Dobavljač: Vilmorin',
                    image: 'sjeme-povrca/plodno-povrce/kukuruz-secerac/turbo-f1.jpg',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=78'
                }
            ]
        }
    ]
</script>

<section class="section">
    <div class="container">
        <nav><small><a rel="prefetch" href="proizvodi">Proizvodi</a> > Plodno povrće</small></nav>
        <h1>Plodno povrće</h1>
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
