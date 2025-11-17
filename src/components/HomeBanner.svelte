<section class="banner">
  <img class="banner-image" src="agrimatco.svg" alt="Agrimatco" width="200" />
  <h1 class="banner-headline">U službi poljoprivrede od 1936. godine</h1>
</section>

<style>
  .banner {
    text-align: center;
    padding: var(--space-large) var(--space-medium);
    background-color: var(--background-primary);
    background-image: url('../accent-left.svg'), url('../accent-right.svg');
    background-repeat: no-repeat;
    background-position:
      left center,
      right center;
    border-bottom: 1px solid var(--border);
  }
  .banner-image {
    margin-bottom: var(--space-medium);
  }
  .banner-headline {
    margin: 0;
  }
  @media (max-width: 600px) {
    .banner {
      background-image: none;
    }
  }
</style>
