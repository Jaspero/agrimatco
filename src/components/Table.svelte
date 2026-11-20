<script>
  import { onMount } from 'svelte';

  // A table wider than the screen scrolls inside this box; it must then be reachable by keyboard (WCAG 2.1.1).
  let el;
  let scrollable = false;
  onMount(() => {
    const check = () => (scrollable = el.scrollWidth > el.clientWidth + 1);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  });
</script>

<div
  class="table"
  bind:this={el}
  tabindex={scrollable ? 0 : undefined}
  role={scrollable ? 'region' : undefined}
  aria-label={scrollable ? 'Tablica (pomičite vodoravno)' : undefined}
>
  <table>
    <slot></slot>
  </table>
</div>

<style>
  .table {
    position: relative;
    margin: var(--space-regular) 0;
    overflow: auto;
    font-size: var(--font-small);
  }
  .table:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }
  .table > table {
    width: 100%;
  }
  .table :global(th),
  .table :global(td) {
    text-align: left;
    padding: var(--space-small);
  }
  .table :global(th) {
    color: white;
    background: linear-gradient(#005427, #008847);
  }
  .table :global(td) {
    background: #eee;
  }
</style>
