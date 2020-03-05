<svelte:head>
    <title>Agrimatco | Proizvodi | Tekuća gnojiva</title>
</svelte:head>

<script>
    import ProductCard from '../../components/ProductCard.svelte';

    let groups = [
        {
            name: '',
            items: [
                {
                    title: 'Multi N',
                    description: 'Biljkama najdostupniji dušik',
                    image: 'tekuca-gnojiva/multi-n.jpg',
                    link: 'katalozi/2020-prihrana.pdf#page=14'
                },
                {
                    title: 'Promet Ca',
                    description: 'Kalcij kompleks s aminokiselinama i organskom tvari',
                    image: 'tekuca-gnojiva/promet-ca.jpg',
                    link: 'katalozi/2020-prihrana.pdf#page=27'
                },
                {
                    title: 'Promet Zn',
                    description: 'Tekuće gnojivo sa cinkom i organskom materijom',
                    image: 'tekuca-gnojiva/promet-zn.jpg',
                    link: 'katalozi/2020-prihrana.pdf#page=27'
                },
                {
                    title: 'YaraVita',
                    description: 'Folijarna gnojiva s jednim hranjivim elementom',
                    image: 'tekuca-gnojiva/yara-vita-1.png',
                    link: 'katalozi/2020-prihrana.pdf#page=34'
                },
                {
                    title: 'YaraVita',
                    description: 'Folijarna gnojiva s kombinacijom hranjivih elemenata',
                    image: 'tekuca-gnojiva/yara-vita-2.png',
                    link: 'katalozi/2020-prihrana.pdf#page=35'
                },
                {
                    title: 'Agrofol 650',
                    description: 'Tekuće gnojivo s visokim sadržajem sumpora (S)',
                    image: 'tekuca-gnojiva/agrofol-650.jpg',
                    link: 'katalozi/2020-prihrana.pdf#page=36'
                },
                {
                    title: 'Agrofol 390',
                    description: 'NPK tekuće gnojivo namijenjeno za redovnu folijarnu prihranu',
                    image: 'tekuca-gnojiva/agrofol-390.jpg',
                    link: 'katalozi/2020-prihrana.pdf#page=37'
                },
                {
                    title: 'Agrofol 550K',
                    description: 'Tekuće gnojivo na bazi sumpora i kalija sa mikro-hranjivim tvarima',
                    image: 'tekuca-gnojiva/agrofol-550K.jpg',
                    link: 'katalozi/2020-prihrana.pdf#page=38'
                },
                {
                    title: 'Kalex Zn',
                    description: 'Tekuće mineralno gnojivo koje sadrži visoku koncentraciju fosfora i cinka',
                    image: 'tekuca-gnojiva/kalex-zn.jpg',
                    link: 'katalozi/2020-prihrana.pdf#page=38'
                },
                {
                    title: 'Kalex Cu',
                    description: 'Tekuće gnojivo s visokim sadržajem bakra (Cu)',
                    image: 'tekuca-gnojiva/kalex-cu.jpg',
                    link: 'katalozi/2020-prihrana.pdf#page=39'
                },
                {
                    title: 'Kalex',
                    description: 'Posebno tekuće mineralno gnojivo koje sadrži visoku koncentraciju fosfora i kalija dobivenog iz kalij-fosfita',
                    image: 'tekuca-gnojiva/kalex.png',
                    link: 'katalozi/2020-prihrana.pdf#page=39'
                },
                {
                    title: 'Calcibor',
                    description: 'Posebno dizajnirano tekuće organsko gnojivo koje sadrži visok postotak kalcija (Ca) i bora (B)',
                    image: 'tekuca-gnojiva/calcibor.jpg',
                    link: 'katalozi/2020-prihrana.pdf#page=40'
                },
                {
                    title: 'Boramide',
                    description: 'Specijalno tekuće gnojivo s visokim postotkom bora (B)',
                    image: 'tekuca-gnojiva/boramide.jpg',
                    link: 'katalozi/2020-prihrana.pdf#page=40'
                },
                {
                    title: 'pH master',
                    description: 'Regulator pH vrijednosti vode / NP gnojivo',
                    image: 'tekuca-gnojiva/ph-master.jpg',
                    link: 'katalozi/2020-prihrana.pdf#page=61'
                }
            ]
        }
    ]
</script>

<section class="section">
    <div class="container">
        <nav><small><a rel="prefetch" href="proizvodi">Proizvodi</a> > Tekuća gnojiva</small></nav>
        <h1>Tekuća gnojiva</h1>
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
