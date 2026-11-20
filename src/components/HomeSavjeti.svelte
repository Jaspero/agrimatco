<script>
    import Button from '../components/Button.svelte';
</script>

<style>
  .savjeti {
    text-align: center;
    padding: var(--space-large) var(--space-medium);
    /* light dark tint over the photo keeps the white text at 4.5:1 or more (WCAG 1.4.3) */
    background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url('/static/home-savjeti/savjeti.png');
    background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), image-set(url('/static/home-savjeti/savjeti.webp') type('image/webp'), url('/static/home-savjeti/savjeti.png') type('image/png'));
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-bottom: 1px solid var(--border);
    color: white;
  }
  .savjeti-image {
  }
  .savjeti-descirption {
  }
</style>

<section class="savjeti">
    <img class="savjeti-image" src="/agrimatco-negative.svg" alt="Agrimatco" width="200" height="200">
    <p class="savjeti-descirption">Imamo vješte, kvalificirane, i kvalitetne ljude<br>koji su uvijek spremni pomoći i ponuditi savjete.</p>
    <Button href="/strucni-savjeti">Naši savjeti</Button>
</section>
