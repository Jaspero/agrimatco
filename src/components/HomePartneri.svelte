<script>
  let paused = false;
</script>

<section class="partneri" aria-labelledby="partneri-naslov">
  <h2 id="partneri-naslov" class="partneri-title">Naši partneri</h2>
  <button type="button" class="partneri-pause" on:click={() => (paused = !paused)}>
    {paused ? 'Pokreni' : 'Zaustavi'}<span class="sr-only"> pomicanje logotipa</span>
  </button>
  <div class="partneri-slider" class:paused>
    <img class="partneri-slider-image" src="/home-partneri/logo-1.png" alt="Sakata" />
    <!--        <img class="partneri-slider-image" src="home-partneri/logo-2.png" alt="">-->
    <img class="partneri-slider-image" src="/home-partneri/logo-3.png" alt="Cosmocel" />
    <img class="partneri-slider-image" src="/home-partneri/logo-4.png" alt="DRT" />
    <img class="partneri-slider-image" src="/home-partneri/logo-5.png" alt="Azud" />
    <img class="partneri-slider-image" src="/home-partneri/logo-6.png" alt="United Genetics" />
    <img class="partneri-slider-image" src="/home-partneri/logo-7.png" alt="Milagro Fertilizzanti Speciali" />
    <img class="partneri-slider-image" src="/home-partneri/logo-8.png" alt="Barclay Crop Protection" />
    <img class="partneri-slider-image" src="/home-partneri/logo-9.png" alt="Danuba" />
    <img class="partneri-slider-image" src="/home-partneri/logo-10.png" alt="Compo Expert" />
    <img class="partneri-slider-image" src="/home-partneri/logo-11.png" alt="ISI Sementi" />
    <img class="partneri-slider-image" src="/home-partneri/logo-12.png" alt="SQM" />
    <img class="partneri-slider-image" src="/home-partneri/logo-13.png" alt="Sotrafa" />
    <img class="partneri-slider-image" src="/home-partneri/logo-14.png" alt="Duna-R Vetőmag" />
    <img class="partneri-slider-image" src="/home-partneri/logo-15.png" alt="MCFP" />
    <img class="partneri-slider-image" src="/home-partneri/logo-16.png" alt="Ascenza" height="70" />
    <img class="partneri-slider-image" src="/home-partneri/logo-17.png" alt="Semo" height="70" />
    <img class="partneri-slider-image" src="/home-partneri/logo-18.png" alt="SI" />
    <img class="partneri-slider-image" src="/home-partneri/logo-19.png" alt="Tessenderlo Group" />
    <img class="partneri-slider-image" src="/home-partneri/logo-20.jpg" alt="Vilmorin Mikado" />
    <img class="partneri-slider-image" src="/home-partneri/logo-21.png" alt="Akona Irrigation Systems" />
    <img class="partneri-slider-image" src="/home-partneri/logo-22.jpg" alt="Esasem" />
    <!--        <img class="partneri-slider-image" src="home-partneri/logo-23.png" alt="">-->
    <img class="partneri-slider-image" src="/home-partneri/logo-24.jpg" alt="Diachem" />
    <img class="partneri-slider-image" src="/home-partneri/logo-25.png" alt="Sumika Agrotech" />
    <img class="partneri-slider-image" src="/home-partneri/logo-26.png" alt="Interagro" />
    <img class="partneri-slider-image" src="/home-partneri/logo-27.png" alt="Mira Seeds" />
    <img class="partneri-slider-image" src="/home-partneri/logo-29.jpg" alt="Capsico" />
    <img class="partneri-slider-image" src="/home-partneri/logo-30.png" alt="SAIS" />
    <img class="partneri-slider-image" src="/home-partneri/logo-31.png" alt="Simonis Fertilizers" />
    <img class="partneri-slider-image" src="/home-partneri/logo-34.jpg" alt="Tozer Seeds" />
    <img class="partneri-slider-image" src="/home-partneri/logosab.png" alt="ASAB" />
  </div>
</section>

<style>
  .partneri {
    text-align: center;
    overflow: hidden;
  }
  .partneri-title {
    font-size: 1.8em;
  }
  .partneri-pause {
    min-height: 2.75rem;
    padding: 0 var(--space-regular);
    border: 1px solid var(--border);
    background: var(--background-primary);
    color: var(--color-primary);
    font-family: inherit;
    font-size: var(--font-small);
    font-weight: bold;
    cursor: pointer;
  }
  .partneri-pause:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }
  .partneri-slider.paused {
    animation-play-state: paused;
  }
  @media (prefers-reduced-motion: reduce) {
    .partneri-slider {
      animation: none !important;
      width: auto;
      flex-wrap: wrap;
      justify-content: center;
    }
    .partneri-slider-image {
      margin: var(--space-small) var(--space-regular);
    }
    .partneri-pause {
      display: none;
    }
  }
  .partneri-slider {
    display: flex;
    align-items: center;
    padding: var(--space-medium) 0;
    width: max-content;
    animation: autoslide 60s linear infinite alternate;
  }
  @keyframes autoslide {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-100% + 100vw));
    }
  }
  .partneri-slider-image {
    flex-shrink: 0;
    margin: 0 var(--space-regular);
    max-width: 200px;
    object-fit: contain;
  }
</style>
