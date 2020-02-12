<script>
    export let name = '';
    export let title = '';
    export let area = '';
    export let phone = '';
    export let email = '';
</script>

<style>
    .member-card {
        background-color: var(--background-primary);
        background-image: url('../accent-right.svg');
        background-repeat: no-repeat;
        background-position: right center;
        border: 1px solid var(--border);
        padding: var(--space-medium);
        margin: var(--space-small) 0;
    }
    .member-card-name {
        font-size: 1.1em;
        margin: 0;
    }
    .member-card-description {
        margin-bottom: var(--space-small);
        font-size: var(--font-small);
    }
</style>

<article class="member-card">
    <h1 class="member-card-name"><b>{name}</b></h1>
    <div class="member-card-description">
        {#if area}
            {title}, {area}
        {:else}
            {title}
        {/if}
    </div>
    <div><a href="tel:{phone}">{phone}</a></div>
    <div><a href="mailto:{email}">{email}</a></div>
</article>
