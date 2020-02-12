<svelte:head>
	<title>{status}</title>
</svelte:head>

<script>
	export let status;
	export let error;
</script>

<section class="section">
	<div class="container">
		<p>Error {status} — {error.message}</p>
	</div>
</section>
