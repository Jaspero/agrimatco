<div class="table">
  <table>
    <slot></slot>
  </table>
</div>

<style>
  .table {
    margin: var(--space-regular) 0;
    overflow: auto;
    font-size: var(--font-small);
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
    background: linear-gradient(#005427, #00a94f);
  }
  .table :global(td) {
    background: #eee;
  }
</style>
