<script>
  import { page } from '$app/stores';

  $: status = $page.status;
  $: heading = status === 404 ? 'Stranica nije pronađena' : `Greška ${status}`;
</script>

<svelte:head>
  <title>{heading} | Agrimatco</title>
</svelte:head>

<section class="section">
  <div class="container">
    <h1>{heading}</h1>
    <p>Error {status} — {$page.error?.message || 'Unknown error'}</p>
    <p><a href="/">Povratak na početnu stranicu</a></p>
  </div>
</section>
