<svelte:head>
    <title>Agrimatco | Proizvodi | Biološka zaštita</title>
</svelte:head>

<script>
    import ProductCard from '../../components/ProductCard.svelte';

    let groups = [
        {
            name: '',
            items: [
                {
                    title: 'Rajčica i korisni kukci',
                    description: '/',
                    image: 'bioloska-zastita/rajcica.png',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=9'
                },
                {
                    title: 'Paprika i korisni kukci',
                    description: '/',
                    image: 'bioloska-zastita/paprika.png',
                    link: 'katalozi/2023-sjeme-povrca.pdf#page=9'
                }
            ]
        }
    ]
</script>

<section class="section">
    <div class="container">
        <nav><small><a rel="prefetch" href="proizvodi">Proizvodi</a> > Biološka zaštita</small></nav>
        <h1>Biološka zaštita - korisni kukci</h1>
        <p><b>Bioplanet</b> – više od 30 godina iskustva u biološkoj zaštiti poljoprivrednih kultura.</p>
        <p>Brojne štetočine napadaju poljoprivredne kulture uzrokujući smanjenje uroda i kakvoće poljoprivrednih proizvoda. Osim kemijskim sredstvima, poljoprivredne se kulture od štetnika mogu zaštititi i putem BIOLOŠKE ZAŠTITE (KORISNI KUKCI).</p>
        <p>Biološka zaštita se zasniva na zaštiti biljaka od štetočina korištenjem njihovih prirodnih neprijatelja koji u prirodi održavaju ravnotežu i ne dopuštaju da se štetnici biljnih vrsta prenamnože. Za razliku od štetočina, predatori se postepeno umnožavaju na biljkama tako da su odlično rješenje za duži ciklus proizvodnje. Prirodni neprijatelji namjerno se unose u voćnjake i zaštićene prostore i koriste u suzbijanju najznačajnijih štetočina u povrtlarskim i voćarskim kulturama, kao što su tripsi, lisne uši, bijele mušice, crveni pauk, tuta absoluta, lisni mineri i drugi.</p>
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
