<script>
  export let title = '';
  export let description = '';
  export let image = '';
  export let link = '';
  export let target = '_blank';
</script>

<a class="product-card" href={link} {target} rel="prefetch">
  <img class="product-card-image" src="proizvodi/{image}" alt="" />
  <div class="product-card-title">{title}</div>
  <div class="product-card-description">{description}</div>
</a>

<style>
  .product-card {
    display: block;
    text-decoration: none;
    font-size: var(--font-small);
    border: 1px solid var(--border);
    height: calc(100% - var(--space-regular));
    margin-bottom: var(--space-regular);
  }
  .product-card:hover {
    background: var(--accent);
    color: var(--accent-contrast);
  }
  .product-card-image {
    background: var(--background-primary);
    border-bottom: 1px solid var(--border);
    height: 200px;
    width: 100%;
    object-fit: contain;
  }
  .product-card-title {
    margin: var(--space-regular) var(--space-regular) var(--space-small);
    font-size: 1.2em;
    font-weight: bold;
  }
  .product-card-description {
    margin: var(--space-small) var(--space-regular) var(--space-medium);
  }
</style>
