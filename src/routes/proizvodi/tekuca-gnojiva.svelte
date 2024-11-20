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
                    link: 'katalozi/2023-gnojidba-prihrana-zastita.pdf#page=14'
                },
                {
                    title: 'Promet Ca',
                    description: 'Kalcij kompleks s aminokiselinama i organskom tvari',
                    image: 'tekuca-gnojiva/promet-ca.jpg',
                    link: 'katalozi/2023-gnojidba-prihrana-zastita.pdf#page=27'
                },
                {
                    title: 'Promet Zn',
                    description: 'Tekuće gnojivo sa cinkom i organskom materijom',
                    image: 'tekuca-gnojiva/promet-zn.jpg',
                    link: 'katalozi/2023-gnojidba-prihrana-zastita.pdf#page=27'
                },
                {
                    title: 'Agrofol 650',
                    description: 'Tekuće gnojivo s visokim sadržajem sumpora (S)',
                    image: 'tekuca-gnojiva/agrofol-650.jpg',
                    link: 'katalozi/2023-gnojidba-prihrana-zastita.pdf#page=36'
                },
                {
                    title: 'Agrofol 390',
                    description: 'NPK tekuće gnojivo namijenjeno za redovnu folijarnu prihranu',
                    image: 'tekuca-gnojiva/agrofol-390.jpg',
                    link: 'katalozi/2023-gnojidba-prihrana-zastita.pdf#page=35'
                },
                {
                    title: 'Agrofol N300',
                    description: 'Tekuće gnojivo na bazi sumpora i kalija sa mikro-hranjivim tvarima',
                    image: 'tekuca-gnojiva/agrofol-N-300.png',
                    link: 'katalozi/2023-gnojidba-prihrana-zastita.pdf#page=34'
                },
                {
                    title: 'Agrofol 550K',
                    description: 'Tekuće gnojivo na bazi sumpora i kalija sa mikro-hranjivim tvarima',
                    image: 'tekuca-gnojiva/agrofol-550K.png',
                    link: 'katalozi/2023-gnojidba-prihrana-zastita.pdf#page=34'
                },
                {
                    title: 'Calcibor',
                    description: 'Posebno dizajnirano tekuće organsko gnojivo koje sadrži visok postotak kalcija (Ca) i bora (B)',
                    image: 'tekuca-gnojiva/calcibor.jpg',
                    link: 'katalozi/2023-gnojidba-prihrana-zastita.pdf#page=39'
                },
                {
                    title: 'Boramide',
                    description: 'Specijalno tekuće gnojivo s visokim postotkom bora (B)',
                    image: 'tekuca-gnojiva/boramide.jpg',
                    link: 'katalozi/2023-gnojidba-prihrana-zastita.pdf#page=39'
                },
                {
                    title: 'pH master',
                    description: 'Regulator pH vrijednosti vode / NP gnojivo',
                    image: 'tekuca-gnojiva/ph-master.jpg',
                    link: 'katalozi/2023-gnojidba-prihrana-zastita.pdf#page=46'
                },
                {
                    title: 'Molbor ',
                    description: 'Tekuće gnojivo za cvatnju i oplodnju',
                    image: 'tekuca-gnojiva/molbor.png',
                    link: 'katalozi/2023-gnojidba-prihrana-zastita.pdf#page=38'
                },
                {
                    title: 'Multiphos Mg',
                    description: 'Tekuće folijarno gnojivo za početni porast i cvatnju',
                    image: 'tekuca-gnojiva/multiphos-mg.png',
                    link: 'katalozi/2023-gnojidba-prihrana-zastita.pdf#page=37'
                },
                {
                    title: 'Foliar Plus ',
                    description: 'Univerzalno tekuće folijarno gnojivo',
                    image: 'tekuca-gnojiva/foliar-plus.png',
                    link: 'katalozi/2023-gnojidba-prihrana-zastita.pdf#page=37'
                },
                {
                    title: 'Apical Plus',
                    description: 'Tekuće folijarno gnojivo za početak zriobe',
                    image: 'tekuca-gnojiva/apical-plus.png',
                    link: 'katalozi/2023-gnojidba-prihrana-zastita.pdf#page=37'
                },
                {
                    title: 'Dentamet',
                    description: 'Mješavina mikroelemenata Cu i Zn',
                    image: 'tekuca-gnojiva/dentamet.jpg',
                    link: 'katalozi/2023-gnojidba-prihrana-zastita.pdf#page=30'
                },
                {
                    title: 'Wopro tana',
                    description: 'Wopro Tana NPK 9 -0- 0 + Mg, S, Ca , Wopro Tana NPK 4 -1- 6 + Mg, S, Ca, Wopro Tana NPK 3 -4- 3 + Mg, S, Ca',
                    image: 'tekuca-gnojiva/wopro-tana.jpg',
                    link: ''
                },
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
