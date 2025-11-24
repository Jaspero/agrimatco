<script>
  export let status;
  export let error;
</script>

<svelte:head>
  <title>{status}</title>
</svelte:head>

<section class="section">
  <div class="container">
    <p>Error {status} — {error?.message || 'Unknown error'}</p>
  </div>
</section>
