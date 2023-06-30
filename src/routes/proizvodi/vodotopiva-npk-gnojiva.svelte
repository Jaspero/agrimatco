<svelte:head>
    <title>Agrimatco | Proizvodi | Vodotopiva NPK gnojiva</title>
</svelte:head>

<script>
    import ProductCard from '../../components/ProductCard.svelte';

    let groups = [
        {
            name: '',
            items: [
                {
                    title: 'SoluPotasse',
                    description: 'Kalij sulfat (SOP)',
                    image: 'vodotopiva-npk-gnojiva/solupotasse.png',
                    link: 'katalozi/2023-gnojidba-prihrana-zastita.pdf#page=11'
                },
                {
                    title: 'Amco Potato',
                    description: 'Kompleksna NPK formulacija za folijarnu primjenu u krumpiru',
                    image: 'vodotopiva-npk-gnojiva/amco-potato.png',
                    link: 'katalozi/2023-gnojidba-prihrana-zastita.pdf#page=15'
                },
                {
                    title: 'Novalon',
                    description: 'Gnojivo namijenjeno za folijarnu primjenu u svim razvojnim fazama biljke',
                    image: 'vodotopiva-npk-gnojiva/novalon.jpg',
                    link: 'katalozi/2023-gnojidba-prihrana-zastita.pdf#page=16'
                },
                {
                    title: 'Amcolon',
                    description: 'NPK vodotopivo gnojivo + mikroelementi',
                    image: 'vodotopiva-npk-gnojiva/amcolon-18-18-18.png',
                    link: 'katalozi/2023-gnojidba-prihrana-zastita.pdf#page=16'
                },
                {
                    title: 'Hydroponica Calnit',
                    description: 'Vodotopivo gnojivo kalcij nitrat',
                    image: 'vodotopiva-npk-gnojiva/hydroponica-calnit.png',
                    link: 'katalozi/2023-gnojidba-prihrana-zastita.pdf#page=20'
                },
                {
                    title: 'Hydroponica Calmag',
                    description: 'Vodotopivo gnojivo kalcij magnezij nitrat',
                    image: 'vodotopiva-npk-gnojiva/hydroponica-calmag.jpg',
                    link: 'katalozi/2023-gnojidba-prihrana-zastita.pdf#page=20'
                },
            ]
        }
    ]
</script>

<section class="section">
    <div class="container">
        <nav><small><a rel="prefetch" href="proizvodi">Proizvodi</a> > Vodotopiva NPK gnojiva</small></nav>
        <h1>Vodotopiva NPK gnojiva</h1>
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
