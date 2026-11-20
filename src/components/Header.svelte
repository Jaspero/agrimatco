<script>
    export let menuToggle;
    export let menu = false;
</script>

<style>
    .header {
        border-bottom: 1px solid var(--border);
    }
    .header-container {
        display: flex;
        align-items: center;
        margin: 0 auto;
        max-width: var(--container);
        padding: var(--space-small) var(--space-medium);
    }
    .header-logo {
        margin-left: 0;
    }
    .header-menu {
        display: none;
        cursor: pointer;
        margin-left: auto;
        font-weight: bold;
        padding: 1em;
        border: none;
        background: var(--accent);
        color: var(--accent-contrast);
        font-size: var(--font-small);
        font-family: inherit;
    }
    .header-menu:focus,
    .header-menu:hover {
        outline: 2px solid var(--color-primary);
    }
    @media (max-width: 900px) {
        .header-menu {
            display: block;
        }
    }
</style>

<header class="header">
    <div class="header-container">
        <a href="/"><img class="header-logo" src="/agrimatco.svg" alt="Agrimatco, početna stranica" width="120" height="120"></a>
        <button id="menu-button" class="header-menu" on:click={menuToggle} aria-expanded={menu ? 'true' : 'false'} aria-controls="glavna-navigacija">MENU</button>
    </div>
</header>
