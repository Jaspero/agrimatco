<script>
    const slides = [
        {
            image: `../home-slider/gnojidba.jpg`,
            title: `Gnojidba`,
            content: `U suvremenoj biljnoj proizvodnji gnojidbu treba smatrati investicijom, a ne troškom bilo da se radi o direktnoj gnojidbi, folijarnoj gnojidbi ili gnojidbi putem sustava kap na kap. Granulirana, vodotopiva i tekuća  gnojiva će svojim sastavom i ciljanim formulacijama značajno povećati prinos i kvalitetu proizvodnje.`
        },
        {
            image: `../home-slider/zastita-bilja.jpg`,
            title: `Zaštita bilja`,
            content: `Čistoća sorte, kvaliteta sjemena i kvalitetna sjetva ne mogu garantirati visoke rezultate bez kvalitetnih i pravilno nanesenih preparata za zaštitu bilja. Tretiranje sjemena danas u svijetu podrazumijeva najbolji i najširi segment u sprečavanju širenja bolesti i štetnika.`
        },
        {
            image: `../home-slider/profesionalno-sjeme-povrca.jpg`,
            title: `Profesionalno sjeme povrća`,
            content: `Kvalitetno sjeme je baza za uspješnu proizvodnju, visoke prinose i u konačnici profitabilnost proizvodnje. U našoj ponudi je provjeren i kvalitetan izbor hibrida sjemena povrća šest sjemenskih tvrtki koje imaju veliko iskustvo u istraživanju, proizvodnji i doradi visoko kvalitetnog sjemena povrća.`
        },
        {
            image: `../home-slider/stimulatori-i-poboljsivaci-tla.jpg`,
            title: `Stimulatori porasta i poboljšivači tla`,
            content: `Koriste se za povećanje biološke plodnosti tla, oporavak iscrpljenog tla, jačanje biljnih funkcija, zadržavanje vlage u tlu, razvoj korjena, reguliranje pH vrijednosti tla, popravljanje strukture tla i ostvarivanje što boljih rezultata u svim fazama razvoja biljke.`
        },
        {
            image: `../home-slider/navodnjavanje.jpg`,
            title: `Navodnjavanje`,
            content: `U vrijeme očuvanja resursa i vode, navodnjavanje kap po kap ima veliki značaj, a sama instalacija je jeftinija od instalacije tradicionalnih sustava i utrošak vode je mnogo manji.`
        },
        {
            image: `../home-slider/repelent-za-puzeve.jpg`,
            title: `Repelent za puževe`,
            content: `Biološki repelent na bazi ekstrakata i biljnih ulja, Delumbri Limax, talijanske tvrtke Diagro, koristi se za odbijanje puževa u tlu i na biljkama, prisiljavajući ih da napuste teren i da se ne hrane biljkama.`
        },
        {
            image: `../home-slider/pomocna-sredstva.jpg`,
            title: `Pomoćna sredstva`,
            content: `Okvašivači, aktivatori i penetratori su formulirani posebno za poboljšanje performansi većine pesticida, te pojačavaju apsorpciju i translokaciju folijarnih gnojiva.`
        },
        {
            image: `../home-slider/mulch-folije.jpg`,
            title: `Mulch folije`,
            content: `Mulch folije se koriste u proizvodnji jer sprječavaju rast korova, reguliraju temperaturu, smanjuju evaporaciju iz tla, povoljno utječu na povećanje vlage u tlu te smanjuju nadmetanje biljnih vrsta s korovima.`
        }
    ];
</script>

<style>
    .slider {
        border-bottom: 1px solid var(--border);
        display: flex;
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        scroll-behavior: smooth;
        -webkit-overflow-scrolling: touch;
    }
    .slider-slide {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        flex-shrink: 0;
        min-height: 75vh;
        width: calc(100vw - var(--space-medium));
        border-left: 1px solid var(--border);
        border-right: 1px solid var(--border);
        background-size: cover;
        background-position: center;
        scroll-snap-align: start;
    }
    .slider-slide-title {
        color: white;
        text-shadow: 0 0 6px black;
        margin: var(--space-medium);
    }
    .slider-slide-content {
        margin: auto var(--space-regular) var(--space-regular) auto;
        padding: var(--space-regular);
        font-size: var(--font-small);
        background: rgba(255,255,255,.8);
        border: 1px solid var(--border);
        max-width: 30em;
    }
    @media (max-width: 600px) {
        .slider-slide-content {
            max-width: unset;
            margin: auto var(--space-medium) var(--space-medium);
        }
    }
</style>

<section class="slider">
    {#each slides as slide, i}
        <article class="slider-slide" style="background-image: url('{slide.image}')">
            <h1 class="slider-slide-title">{slide.title}</h1>
            <p class="slider-slide-content">{slide.content}</p>
        </article>
    {/each}
</section>
