<script>
  import Button from './Button.svelte';
</script>

<section class="savjeti">
  <img class="savjeti-image" src="agrimatco-negative.svg" alt="Agrimatco" width="200" />
  <p class="savjeti-descirption">
    Imamo vješte, kvalificirane, i kvalitetne ljude<br />koji su uvijek spremni pomoći i ponuditi
    savjete.
  </p>
  <Button href="strucni-savjeti">Naši savjeti</Button>
</section>

<style>
  .savjeti {
    text-align: center;
    padding: var(--space-large) var(--space-medium);
    background-image: url('../../home-savjeti/savjeti.png');
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
