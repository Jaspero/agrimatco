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
                    title: 'TopMara F1',
                    description: 'Dobavljač: United Genetics',
                    image: 'sjeme-povrca/plodno-povrce/lubenica/topmara-f1.jpg',
                    link: 'katalozi/2022-sjeme-povrca.pdf#page=48'
                },
                {
                    title: 'Early Samantha F1',
                    description: 'Dobavljač: United Genetics',
                    image: 'sjeme-povrca/plodno-povrce/lubenica/early-samantha-f1.jpg',
                    link: 'katalozi/2022-sjeme-povrca.pdf#page=48'
                },
                {
                    title: 'Early Crimara F1',
                    description: 'Dobavljač: United Genetics',
                    image: 'sjeme-povrca/plodno-povrce/lubenica/early-crimara-f1.jpg',
                    link: 'katalozi/2022-sjeme-povrca.pdf#page=48'
                },
                {
                    title: 'Karnakata F1',
                    description: 'Dobavljač: United Genetics',
                    image: 'sjeme-povrca/plodno-povrce/lubenica/karnakata-f1.jpg',
                    link: 'katalozi/2022-sjeme-povrca.pdf#page=49'
                },
                {
                    title: 'Samantha F1',
                    description: 'Dobavljač: United Genetics',
                    image: 'sjeme-povrca/plodno-povrce/lubenica/samantha-f1.jpg',
                    link: 'katalozi/2022-sjeme-povrca.pdf#page=49'
                },
                {
                    title: 'Marbella F1',
                    description: 'Dobavljač: United Genetics',
                    image: 'sjeme-povrca/plodno-povrce/lubenica/marbella-f1.jpg',
                    link: 'katalozi/2022-sjeme-povrca.pdf#page=49'
                },
                {
                    title: 'Prismatica F1',
                    description: 'Dobavljač: United Genetics',
                    image: 'sjeme-povrca/plodno-povrce/lubenica/prismatica-f1.jpg',
                    link: 'katalozi/2022-sjeme-povrca.pdf#page=50'
                },
                {
                    title: 'Crimstar F1',
                    description: 'Dobavljač: Sakata',
                    image: 'sjeme-povrca/plodno-povrce/lubenica/crimstar-f1.jpg',
                    link: 'katalozi/2022-sjeme-povrca.pdf#page=50'
                },
                {
                    title: 'Odyssey F1',
                    description: 'Dobavljač: Sakata',
                    image: 'sjeme-povrca/plodno-povrce/lubenica/odyssey-f1.jpg',
                    link: 'katalozi/2022-sjeme-povrca.pdf#page=50'
                },
                {
                    title: 'Celest F1',
                    description: 'Dobavljač: Sakata',
                    image: 'sjeme-povrca/plodno-povrce/lubenica/celest.png',
                    link: 'katalozi/2022-sjeme-povrca.pdf#page=50'
                },
                {
                    title: 'Lusia F1',
                    description: 'Dobavljač: Vilmorin',
                    image: 'sjeme-povrca/plodno-povrce/lubenica/lusia-f1.jpg',
                    link: 'katalozi/2022-sjeme-povrca.pdf#page=51'
                },
                {
                    title: 'Romeria F1',
                    description: 'Dobavljač: United Genetics',
                    image: 'sjeme-povrca/plodno-povrce/lubenica/romeria-f1.jpg',
                    link: 'katalozi/2022-sjeme-povrca.pdf#page=51'
                },
                {
                    title: 'Obla F1',
                    description: 'Dobavljač: Esasem',
                    image: 'sjeme-povrca/plodno-povrce/lubenica/obla-f1.jpg',
                    link: 'katalozi/2022-sjeme-povrca.pdf#page=51'
                },
                {
                    title: 'Ketty F1',
                    description: 'Dobavljač: Esasem',
                    image: 'sjeme-povrca/plodno-povrce/lubenica/ketty.png',
                    link: 'katalozi/2022-sjeme-povrca.pdf#page=51'
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
                    link: 'katalozi/2022-sjeme-povrca.pdf#page=52'
                }
            ]
        },
        {
            name: 'Dinja',
            items: [
                {
                    title: 'Terriero F1',
                    description: 'Dobavljač: Vilmorin',
                    image: 'sjeme-povrca/plodno-povrce/dinja/terriero-f1.jpg',
                    link: 'katalozi/2022-sjeme-povrca.pdf#page=53'
                },
                {
                    title: 'Wrangler F1',
                    description: 'Dobavljač: SAIS',
                    image: 'sjeme-povrca/plodno-povrce/dinja/wrangler-f1.jpg',
                    link: 'katalozi/2022-sjeme-povrca.pdf#page=53'
                },
                {
                    title: 'Portento',
                    description: 'Dobavljač: SAIS',
                    image: 'sjeme-povrca/plodno-povrce/dinja/wrangler-f1.jpg',
                    link: 'katalozi/2022-sjeme-povrca.pdf#page=53'
                },
                {
                    title: 'El Rey',
                    description: 'Dobavljač: SAIS',
                    image: 'sjeme-povrca/plodno-povrce/dinja/wrangler-f1.jpg',
                    link: 'katalozi/2022-sjeme-povrca.pdf#page=53'
                },
                {
                    title: 'Jannet',
                    description: 'Dobavljač: SAIS',
                    image: 'sjeme-povrca/plodno-povrce/dinja/jannet.png',
                    link: 'katalozi/2022-sjeme-povrca.pdf#page=53'
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
                    link: 'katalozi/2022-sjeme-povrca.pdf#page=56'
                },
                {
                    title: 'Pluto',
                    description: 'Dobavljač: Sakata',
                    image: 'sjeme-povrca/plodno-povrce/tikva/pluto.png',
                    link: 'katalozi/2022-sjeme-povrca.pdf#page=56'
                },
                {
                    title: 'Veenas F1',
                    description: 'Dobavljač: Sakata',
                    image: 'sjeme-povrca/plodno-povrce/tikva/veenas-f1.jpg',
                    link: 'katalozi/2022-sjeme-povrca.pdf#page=56'
                },
                {
                    title: 'Yellowboys F1',
                    description: 'Dobavljač: Semo',
                    image: 'sjeme-povrca/plodno-povrce/tikva/yellowboys-f1.jpg',
                    link: 'katalozi/2022-sjeme-povrca.pdf#page=56'
                },
                {
                    title: 'Yellowgirls F1',
                    description: 'Dobavljač: Semo',
                    image: 'sjeme-povrca/plodno-povrce/tikva/yellowgirls-f1.jpg',
                    link: 'katalozi/2022-sjeme-povrca.pdf#page=57'
                },
                {
                    title: 'Hokkaido Orange',
                    description: 'Dobavljač: Semo',
                    image: 'sjeme-povrca/plodno-povrce/tikva/hokkaido-orange.jpg',
                    link: 'katalozi/2022-sjeme-povrca.pdf#page=57'
                },
                {
                    title: 'Delica F1',
                    description: 'Dobavljač: Semo',
                    image: 'sjeme-povrca/plodno-povrce/tikva/delica-f1.jpg',
                    link: 'katalozi/2022-sjeme-povrca.pdf#page=57'
                },
                {
                    title: 'Crown Prince F1',
                    description: 'Dobavljač: Sakata',
                    image: 'sjeme-povrca/plodno-povrce/tikva/crown-prince-f1.jpg',
                    link: 'katalozi/2022-sjeme-povrca.pdf#page=57'
                }
            ]
        },
        {
            name: 'Tikvica',
            items: [
                {
                    title: 'Pontino F1',
                    description: 'Dobavljač: Esasem',
                    image: 'sjeme-povrca/plodno-povrce/tikvica/pontino-f1.jpg',
                    link: 'katalozi/2022-sjeme-povrca.pdf#page=55'
                },
                {
                    title: 'Ascona',
                    description: 'Dobavljač: Sakata',
                    image: 'sjeme-povrca/plodno-povrce/tikvica/pontino-f1.jpg',
                    link: 'katalozi/2022-sjeme-povrca.pdf#page=55'
                },
                {
                    title: 'Tendor F1',
                    description: 'Dobavljač: Vilmorin',
                    image: 'sjeme-povrca/plodno-povrce/tikvica/tendor-f1.jpg',
                    link: 'katalozi/2022-sjeme-povrca.pdf#page=55'
                },
                {
                    title: 'Black Star F1',
                    description: 'Dobavljač: United Genetics',
                    image: 'sjeme-povrca/plodno-povrce/tikvica/black-star-f1.jpg',
                    link: 'katalozi/2022-sjeme-povrca.pdf#page=55'
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
                    link: 'katalozi/2022-sjeme-povrca.pdf#page=57'
                },
                {
                    title: 'Yety F1',
                    description: 'Dobavljač: Sakata',
                    image: 'sjeme-povrca/plodno-povrce/rajcica/yety-f1.jpg',
                    link: 'katalozi/2022-sjeme-povrca.pdf#page=57'
                },
                {
                    title: 'Amerigo F1',
                    description: 'Dobavljač: Sakata',
                    image: 'sjeme-povrca/plodno-povrce/rajcica/amerigo-f1.jpg',
                    link: 'katalozi/2022-sjeme-povrca.pdf#page=57'
                },
                {
                    title: 'Cherokee F1',
                    description: 'Dobavljač: Esasem',
                    image: 'sjeme-povrca/plodno-povrce/rajcica/cherokee-f1.jpg',
                    link: 'katalozi/2022-sjeme-povrca.pdf#page=57'
                },
                {
                    title: 'Rosalba F1',
                    description: 'Dobavljač: Esasem',
                    image: 'sjeme-povrca/plodno-povrce/rajcica/rosalba-f1.jpg',
                    link: 'katalozi/2022-sjeme-povrca.pdf#page=58'
                },
                {
                    title: 'VP1 F1',
                    description: 'Dobavljač: Vilmorin',
                    image: 'sjeme-povrca/plodno-povrce/rajcica/vp1-f1.jpg',
                    link: 'katalozi/2022-sjeme-povrca.pdf#page=58'
                },
                {
                    title: 'Pink Impression F1',
                    description: 'Dobavljač: Sakata',
                    image: 'sjeme-povrca/plodno-povrce/rajcica/pink-impression-f1.jpg',
                    link: 'katalozi/2022-sjeme-povrca.pdf#page=58'
                },
                {
                    title: 'Fuji Pink F1',
                    description: 'Dobavljač: Sakata',
                    image: 'sjeme-povrca/plodno-povrce/rajcica/fuji-pink-f1.jpg',
                    link: 'katalozi/2022-sjeme-povrca.pdf#page=58'
                },
                {
                    title: 'Ricciolo',
                    description: 'Dobavljač: United Genetics',
                    image: 'sjeme-povrca/plodno-povrce/rajcica/ricciolo.jpg',
                    link: 'katalozi/2022-sjeme-povrca.pdf#page=59'
                },
                {
                    title: 'Sauron',
                    description: 'Dobavljač: Esasem',
                    image: 'sjeme-povrca/plodno-povrce/rajcica/sauron-f1.jpg',
                    link: 'katalozi/2022-sjeme-povrca.pdf#page=59'
                },
                {
                    title: 'San Remo F1',
                    description: 'Dobavljač: United Genetics',
                    image: 'sjeme-povrca/plodno-povrce/rajcica/san-remo-f1.jpg',
                    link: 'katalozi/2022-sjeme-povrca.pdf#page=59'
                },
                {
                    title: 'Prezioso F1',
                    description: 'Dobavljač: Esasem',
                    image: 'sjeme-povrca/plodno-povrce/rajcica/prezioso-f1.jpg',
                    link: 'katalozi/2022-sjeme-povrca.pdf#page=60'
                },
                {
                    title: 'Porpora F1',
                    description: 'Dobavljač: Esasem',
                    image: 'sjeme-povrca/plodno-povrce/rajcica/porpora-f1.jpg',
                    link: 'katalozi/2022-sjeme-povrca.pdf#page=60'
                },
                {
                    title: 'Lobello F1',
                    description: 'Dobavljač: Esasem',
                    image: 'sjeme-povrca/plodno-povrce/rajcica/lobello-f1.jpg',
                    link: 'katalozi/2022-sjeme-povrca.pdf#page=60'
                },
                {
                    title: 'Collina F1',
                    description: 'Dobavljač: Esasem',
                    image: 'sjeme-povrca/plodno-povrce/rajcica/collina-f1.jpg',
                    link: 'katalozi/2022-sjeme-povrca.pdf#page=60'
                },
                {
                    title: 'Napika F1',
                    description: 'Dobavljač: Esasem',
                    image: 'sjeme-povrca/plodno-povrce/rajcica/napika-f1.jpg',
                    link: 'katalozi/2022-sjeme-povrca.pdf#page=61'
                },
                {
                    title: 'Rossano F1',
                    description: 'Dobavljač: Esasem',
                    image: 'sjeme-povrca/plodno-povrce/rajcica/rossano-f1.jpg',
                    link: 'katalozi/2022-sjeme-povrca.pdf#page=61'
                },
                {
                    title: 'Troy F1 (Linda F1)',
                    description: 'Dobavljač: Sakata',
                    image: 'sjeme-povrca/plodno-povrce/rajcica/troy-f1.jpg',
                    link: 'katalozi/2022-sjeme-povrca.pdf#page=61'
                },
                {
                    title: 'Kero F1',
                    description: 'Dobavljač: Esasem',
                    image: 'sjeme-povrca/plodno-povrce/rajcica/kero-f1.jpg',
                    link: 'katalozi/2022-sjeme-povrca.pdf#page=61'
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
                    link: 'katalozi/2022-sjeme-povrca.pdf#page=64'
                },
                {
                    title: 'Bibic F1',
                    description: 'Dobavljač: Duna-r',
                    image: 'sjeme-povrca/plodno-povrce/paprika/bibic-f1.jpg',
                    link: 'katalozi/2022-sjeme-povrca.pdf#page=64'
                },
                {
                    title: 'Bagoly F1',
                    description: 'Dobavljač: Duna-r',
                    image: 'sjeme-povrca/plodno-povrce/paprika/bagoly-f1.jpg',
                    link: 'katalozi/2022-sjeme-povrca.pdf#page=64'
                },
                {
                    title: 'Bobita F1',
                    description: 'Dobavljač: Duna-r',
                    image: 'sjeme-povrca/plodno-povrce/paprika/bobita-f1.jpg',
                    link: 'katalozi/2022-sjeme-povrca.pdf#page=65'
                },
                {
                    title: 'Lisenka F1',
                    description: 'Dobavljač: Duna-r',
                    image: 'sjeme-povrca/plodno-povrce/paprika/lisenka-f1.jpg',
                    link: 'katalozi/2022-sjeme-povrca.pdf#page=65'
                },
                {
                    title: 'Ester F1',
                    description: 'Dobavljač: Duna-r',
                    image: 'sjeme-povrca/plodno-povrce/paprika/ester-f1.jpg',
                    link: 'katalozi/2022-sjeme-povrca.pdf#page=65'
                },
                {
                    title: 'Spartaco F1',
                    description: 'Dobavljač: Esasem',
                    image: 'sjeme-povrca/plodno-povrce/paprika/spartaco-f1.jpg',
                    link: 'katalozi/2022-sjeme-povrca.pdf#page=66'
                },
                {
                    title: 'Lake F1',
                    description: 'Dobavljač: Sakata',
                    image: 'sjeme-povrca/plodno-povrce/paprika/lake-f1.jpg',
                    link: 'katalozi/2022-sjeme-povrca.pdf#page=66'
                },
                {
                    title: 'Salana F1',
                    description: 'Dobavljač: Sakata',
                    image: 'sjeme-povrca/plodno-povrce/paprika/salana-f1.jpg',
                    link: 'katalozi/2022-sjeme-povrca.pdf#page=66'
                },
                {
                    title: 'Rafaela F1',
                    description: 'Dobavljač: Semo',
                    image: 'sjeme-povrca/plodno-povrce/paprika/rafaela-f1.jpg',
                    link: 'katalozi/2022-sjeme-povrca.pdf#page=67'
                },
                {
                    title: 'Kadet F1',
                    description: 'Dobavljač: Duna-r',
                    image: 'sjeme-povrca/plodno-povrce/paprika/kadet-f1.jpg',
                    link: 'katalozi/2022-sjeme-povrca.pdf#page=67'
                },
                {
                    title: 'Csango F1',
                    description: 'Dobavljač: Duna-r',
                    image: 'sjeme-povrca/plodno-povrce/paprika/csango-f1.jpg',
                    link: 'katalozi/2022-sjeme-povrca.pdf#page=67'
                },
                {
                    title: 'Archivarius F1 (D1611/961)',
                    description: 'Dobavljač: Duna-r',
                    image: 'sjeme-povrca/plodno-povrce/paprika/archivarius-f1.jpg',
                    link: 'katalozi/2022-sjeme-povrca.pdf#page=67'
                }
            ]
        },
        {
            name: 'Krastavac',
            items: [
                {
                    title: 'Triunfo F1',
                    description: 'Dobavljač: Sakata',
                    image: 'sjeme-povrca/plodno-povrce/krastavac/triunfo-f1.jpg',
                    link: 'katalozi/2022-sjeme-povrca.pdf#page=70'
                },
                {
                    title: 'Kung Fu F1',
                    description: 'Dobavljač: Sakata',
                    image: 'sjeme-povrca/plodno-povrce/krastavac/kung-fu-f1.jpg',
                    link: 'katalozi/2022-sjeme-povrca.pdf#page=70'
                },
                {
                    title: 'Ronda F1',
                    description: 'Dobavljač: Sakata',
                    image: 'sjeme-povrca/plodno-povrce/krastavac/ronda-f1.jpg',
                    link: 'katalozi/2022-sjeme-povrca.pdf#page=70'
                },
                {
                    title: 'Goghen F1',
                    description: 'Dobavljač: Esasem',
                    image: 'sjeme-povrca/plodno-povrce/krastavac/goghen-f1.jpg',
                    link: 'katalozi/2022-sjeme-povrca.pdf#page=70'
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
                    link: 'katalozi/2022-sjeme-povrca.pdf#page=71'
                },
                {
                    title: 'Mirval F1',
                    description: 'Dobavljač: Vilmorin',
                    image: 'sjeme-povrca/plodno-povrce/patlidan/mirval-f1.jpg',
                    link: 'katalozi/2022-sjeme-povrca.pdf#page=71'
                },
                {
                    title: 'Nadia F1',
                    description: 'Dobavljač: Vilmorin',
                    image: 'sjeme-povrca/plodno-povrce/patlidan/nadia-f1.jpg',
                    link: 'katalozi/2022-sjeme-povrca.pdf#page=71'
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
                    link: 'katalozi/2022-sjeme-povrca.pdf#page=72'
                },
                {
                    title: 'Kuatuor F1',
                    description: 'Dobavljač: Vilmorin',
                    image: 'sjeme-povrca/plodno-povrce/kukuruz-secerac/kuatuor-f1.jpg',
                    link: 'katalozi/2022-sjeme-povrca.pdf#page=72'
                },
                {
                    title: 'Rustler F1',
                    description: 'Dobavljač: Vilmorin',
                    image: 'sjeme-povrca/plodno-povrce/kukuruz-secerac/rustler-f1.jpg',
                    link: 'katalozi/2022-sjeme-povrca.pdf#page=72'
                },
                {
                    title: 'HMX9388S (Klondike F1)',
                    description: 'Dobavljač: Vilmorin',
                    image: 'sjeme-povrca/plodno-povrce/kukuruz-secerac/klondike-f1.jpg',
                    link: 'katalozi/2022-sjeme-povrca.pdf#page=73'
                },
                {
                    title: 'Kinze F1',
                    description: 'Dobavljač: Vilmorin',
                    image: 'sjeme-povrca/plodno-povrce/kukuruz-secerac/kinze-f1.jpg',
                    link: 'katalozi/2022-sjeme-povrca.pdf#page=73'
                },
                {
                    title: 'Turbo F1',
                    description: 'Dobavljač: Vilmorin',
                    image: 'sjeme-povrca/plodno-povrce/kukuruz-secerac/turbo-f1.jpg',
                    link: 'katalozi/2022-sjeme-povrca.pdf#page=73'
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
