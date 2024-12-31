<script>
    import {onMount} from 'svelte';
    import Glide from '@glidejs/glide'

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
            image: `../home-slider/amco-drip.jpg`,
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
    onMount(() => {
        new Glide('.glide', {
            autoplay: 7500,
            gap: 0,
            rewind: false
        }).mount()
    });
</script>

<style>
    .glide {
        box-sizing: border-box;
        position: relative;
        width: 100%;
        cursor: grab;
    }
    :global(.glide--dragging) {
        cursor: grabbing !important;
    }
    .glide * {
        box-sizing: inherit;
    }
    .glide__track {
        overflow: hidden;
    }
    .glide__slides {
        position: relative;
        width: 100%;
        backface-visibility: hidden;
        transform-style: preserve-3d;
        touch-action: pan-Y;
        overflow: hidden;
        list-style: none;
        padding: 0;
        margin: 0;
        border: none;
        white-space: nowrap;
        display: flex;
        flex-wrap: nowrap;
        will-change: transform;
    }
    .glide__slide {
        white-space: normal;
        user-select: none;
        -webkit-touch-callout: none;
        -webkit-tap-highlight-color: transparent;
        flex-shrink: 0;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        min-height: 75vh;
        background-size: cover;
        background-position: center;
    }
    .glide__slide-title {
        color: white;
        text-shadow: 0 0 6px black;
        margin: var(--space-medium);
    }
    .glide__slide-content {
        margin: auto var(--space-regular) var(--space-regular) auto;
        padding: var(--space-regular);
        font-size: var(--font-small);
        background: rgba(255,255,255,.8);
        border: 1px solid var(--border);
        max-width: 30em;
    }
    @media (max-width: 600px) {
        .glide__slide-content {
            max-width: unset;
            margin: auto var(--space-medium) var(--space-medium);
        }
    }
</style>

<div class="glide">
    <div class="glide__track" data-glide-el="track">
        <ul class="glide__slides">
            {#each slides as slide, i}
                <li class="glide__slide" style="background-image: url('{slide.image}')">
                    <h1 class="glide__slide-title">{slide.title}</h1>
                    <p class="glide__slide-content">{slide.content}</p>
                </li>
            {/each}
        </ul>
    </div>
</div>
