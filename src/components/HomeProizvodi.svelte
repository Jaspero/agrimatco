<style>
    .proizvodi {
        padding: var(--space-large) 0;
        background: var(--background-secondary);
    }
    .proizvod {
        display: table;
        border-spacing: 0;
        max-width: var(--container);
        margin: 0 auto;
    }
    .proizvod:nth-of-type(even) {
        direction: rtl;
    }
    .proizvod-content {
        direction: ltr;
        display: table-cell;
        vertical-align: middle;
        width: 50%;
        padding-bottom: var(--space-medium);
        background: var(--background-primary);
        font-size: var(--font-small);
    }
    .proizvod-content-title {
        padding: 0 var(--space-medium);
    }
    .proizvod-content-description {
        padding: 0 var(--space-medium);
    }
    .proizvod-content-link {
        display: inline-block;
        padding: 0 var(--space-medium);
    }
    .proizvod-image {
        display: table-cell;
        vertical-align: middle;
        width: 50%;
        position: relative;
    }
    .proizvod-image-inner {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    @media (max-width: 600px) {
        .proizvod {
            display: block;
        }
        .proizvod-content {
            display: block;
            width: unset;
            padding-top: 1px;
            font-size: inherit;
        }
        .proizvod-image {
            display: block;
            width: unset;
        }
        .proizvod-image-inner {
            position: static;
        }
    }
</style>

<section class="proizvodi">
    <div class="proizvod">
        <div class="proizvod-content">
            <h2 class="proizvod-content-title">Sjeme povrća</h2>
            <p class="proizvod-content-description">Agrimatco doo je zastupnik proizvođača povrtarskih kultura renomiranih sjemenskih tvrtki <b>Vilmorin, Sakata, Duna, ISI Sementi, Semo, United Genetics, Esasem</b>. Visoka kvaliteta profesionalnog sjemena je prilagođena našim regionalnim klimatskim uvjetima i sa sigurnošću će ispuniti vaša očekivanja.</p>
            <a class="proizvod-content-link" href=".">Opširnije</a>
        </div>
        <div class="proizvod-image">
            <img class="proizvod-image-inner" src="home-proizvodi/sjeme-povrca.jpg" alt="Sjeme povrća">
        </div>
    </div>

    <div class="proizvod">
        <div class="proizvod-content">
            <h2 class="proizvod-content-title">Mineralna gnojiva</h2>
            <p class="proizvod-content-description">Tvrtke <b>Modern Company for Fertilizer Production, DRT, Cosmocel, Yara, Tessenderlo, Alba Milagro, Kwizda Agro</b> proizvođači su visoko kvalitetnih vodotopivih gnojiva i biostimulatora za tlo i list koje nudimo u našoj paleti. U suvremenoj biljnoj proizvodnji dopunska ishrana vodotopivim gnojivima i biostimulatorima značajno će poboljšati proizvodnju i kvalitetu i na taj način omogućiti postizanje visokih prinosa.</p>
            <a class="proizvod-content-link" href=".">Opširnije</a>
        </div>
        <div class="proizvod-image">
            <img class="proizvod-image-inner" src="home-proizvodi/mineralna-gnojiva.jpg" alt="Mineralna gnojiva">
        </div>
    </div>

    <div class="proizvod">
        <div class="proizvod-content">
            <h2 class="proizvod-content-title">Sredstva za zaštitu bilja</h2>
            <p class="proizvod-content-description">Sredstva za zaštitu bilja tvrtki <b>Sharda, Diagro i Barclay</b> koje nudimo u našoj paleti, te podrška naših stručnih savjetnika zasigurno će omogućiti postizanje vrhunskih prinosa i bogate žetve u nadolazećoj sezoni, štiteći usjeve od korova, bolesti i štetnika.</p>
            <a class="proizvod-content-link" href=".">Opširnije</a>
        </div>
        <div class="proizvod-image">
            <img class="proizvod-image-inner" src="home-proizvodi/sredstva-za-zastitu.jpg" alt="Sredstva za zaštitu bilja">
        </div>
    </div>

    <div class="proizvod">
        <div class="proizvod-content">
            <h2 class="proizvod-content-title">Navodnjavanje</h2>
            <p class="proizvod-content-description">Cijevi za navodnjavanje tvrtki <b>Peštan, Lespinasse Irrigation, Akona, i Sumika</b> nastale su kao rezultat neprekidne pažnje posvećene razvoju novih proizvoda. Napravljene su tehnologijom koja podrazumijeva primjenu visoko kvalitetnih, posebno razvijenih polimera koji zbog čvrstoće i fleksibilnosti imaju uporabu u poljoprivredi.</p>
            <a class="proizvod-content-link" href=".">Opširnije</a>
        </div>
        <div class="proizvod-image">
            <img class="proizvod-image-inner" src="home-proizvodi/navodnjavanje.jpg" alt="Navodnjavanje">
        </div>
    </div>

    <div class="proizvod">
        <div class="proizvod-content">
            <h2 class="proizvod-content-title">Mulch folije</h2>
            <p class="proizvod-content-description">Višeslojne mulch folije tvrtke <b>Sotrafa</b> koje nudimo u našoj paleti, daju optimalno djelovanje prema vanjskim uvjetima kao što su vjetar, kiša, tuča. U našoj ponudi je i multiperforirana mulch folija koja se postavlja preko usjeva, mijenjajući mikroklimatske uvjete koji stvaraju vjetrenjaču i učinak tunela.</p>
            <a class="proizvod-content-link" href=".">Opširnije</a>
        </div>
        <div class="proizvod-image">
            <img class="proizvod-image-inner" src="home-proizvodi/mulch-folije.jpg" alt="Mulch folije">
        </div>
    </div>
</section>
