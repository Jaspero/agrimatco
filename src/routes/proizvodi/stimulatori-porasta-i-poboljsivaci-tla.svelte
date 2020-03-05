<svelte:head>
    <title>Agrimatco | Proizvodi | Stimulatori porasta i poboljšivači tla</title>
</svelte:head>

<script>
    import ProductCard from '../../components/ProductCard.svelte';

    let groups = [
        {
            name: '',
            items: [
                {
                    title: 'Bioplex',
                    description: 'Tekuće folijarno gnojivo i biostimulator za jačanje biljnih funkcija',
                    image: 'stimulatori-porasta-i-poboljsivaci-tla/bioplex.png',
                    link: 'katalozi/2020-prihrana.pdf#page=21'
                },
                {
                    title: 'Calcium Mainstay',
                    description: 'Tekući kalcij-oksid (CaO) za poboljšanje kvalitete ploda pri svim vrstama navodnjavanja i folijarno',
                    image: 'stimulatori-porasta-i-poboljsivaci-tla/calcium-mainstay.jpg',
                    link: 'katalozi/2020-prihrana.pdf#page=23'
                },
                {
                    title: 'Vigorizer',
                    description: 'Stimulator rasta i poboljšivač tla kojim se osigurava visoka otpornost biljke na vanjske utjecaje',
                    image: 'stimulatori-porasta-i-poboljsivaci-tla/vigorizer.jpg',
                    link: 'katalozi/2020-prihrana.pdf#page=24'
                },
                {
                    title: 'Kelatex Ca+B',
                    description: 'Vodotopivo gnojivo za folijarnu primjenu za visoku oplodnju',
                    image: 'stimulatori-porasta-i-poboljsivaci-tla/kelatex-ca-b.jpg',
                    link: 'katalozi/2020-prihrana.pdf#page=25'
                },
                {
                    title: 'Aminoton',
                    description: 'Aktivator plodnosti tla s aminokiselinama za tlo i folijarnu primjenu',
                    image: 'stimulatori-porasta-i-poboljsivaci-tla/aminoton.jpg',
                    link: 'katalozi/2020-prihrana.pdf#page=26'
                },
                {
                    title: 'Bioriviter',
                    description: 'Organsko tekuće gnojivo na osnovu huminskih fulvo kiselina',
                    image: 'stimulatori-porasta-i-poboljsivaci-tla/bioriviter.jpg',
                    link: 'katalozi/2020-prihrana.pdf#page=26'
                },
                {
                    title: 'Staygreen',
                    description: 'Gnojivo - Zaštita biljaka od stresnih klimatskih utjecaja',
                    image: 'stimulatori-porasta-i-poboljsivaci-tla/staygreen.jpg',
                    link: 'katalozi/2020-prihrana.pdf#page=28'
                },
                {
                    title: 'Trifender Pro',
                    description: 'Mnogo učinkovitiji soj gljivice T-34 za eliminaciju zemljišnih patogena',
                    image: 'stimulatori-porasta-i-poboljsivaci-tla/trifender-pro.png',
                    link: 'katalozi/2020-prihrana.pdf#page=41'
                },
                {
                    title: 'Ekotron',
                    description: 'Organsko gnojivo za popravak degradiranog tla',
                    image: 'stimulatori-porasta-i-poboljsivaci-tla/ekotron.jpg',
                    link: 'katalozi/2020-prihrana.pdf#page=42'
                },
                {
                    title: 'H-85',
                    description: 'Stimulator tla koji sadrži huminske i fulvo kiseline',
                    image: 'stimulatori-porasta-i-poboljsivaci-tla/h-85.jpg',
                    link: 'katalozi/2020-prihrana.pdf#page=43'
                }
            ]
        }
    ]
</script>

<section class="section">
    <div class="container">
        <nav><small><a rel="prefetch" href="proizvodi">Proizvodi</a> > Stimulatori porasta i poboljšivači tla</small></nav>
        <h1>Stimulatori porasta i poboljšivači tla</h1>
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
