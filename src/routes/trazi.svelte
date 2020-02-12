<svelte:head>
    <title>Agrimatco | Traži</title>
</svelte:head>

<script>
    import Field from '../components/Field.svelte';
    import Button from '../components/Button.svelte';

    let search = '';

    function handleSubmit() {
        console.log(search);
    }
</script>

<section class="section">
    <div class="container">
        <h1>Pretraživanje pojmova</h1>
        <p>Upišite pojam koji želite pronaći:</p>
        <form id="form" on:submit|preventDefault="{handleSubmit}">
            <Field label="Pojam">
                <input type="search" size="40" bind:value={search} required>
            </Field>
        </form>
        {#if search}
            <figure>
                <figcaption><b>Rezultati:</b></figcaption>
                <ul>
                    <li><a href=".">Something</a></li>
                    <li><a href=".">Another thing</a></li>
                </ul>
            </figure>
        {/if}
    </div>
</section>
