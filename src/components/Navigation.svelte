<script>
    export let segment;
    export let menuToggle;
    export let menuFalse;
    export let menu;
</script>

<style>
    .navigation {
        position: sticky;
        z-index: 2;
        top: 0;
        border-bottom: 1px solid var(--border);
        background: var(--background-secondary);
        font-size: var(--font-small);
    }
    .navigation-container {
        max-width: var(--container);
        margin: 0 auto;
        display: flex;
    }
    .navigation-item {
        padding: var(--space-small) var(--space-regular);
        color: var(--color-secondary);
        text-decoration: none;
        font-weight: bold;
        transition: .2s background, color;
    }
    .navigation-item:hover {
        color: var(--color-primary);
    }
    .navigation-item.active {
        color: var(--accent-contrast);
        background: var(--accent);
    }
    @media (max-width: 900px) {
        .navigation {
            display: none;
            position: absolute;
            top: 137px;
            width: 100%;
            height: calc(100vh - 137px);
            font-size: inherit;
        }
        .navigation.active {
            display: block;
        }
        .navigation-container {
            flex-direction: column;
        }
        .navigation-item {
            padding: var(--space-regular);
            border-bottom: 1px solid var(--border);
        }
    }
</style>

<nav class="navigation" class:active={menu}>
    <div class="navigation-container">
        <a class="navigation-item" rel="prefetch" on:click={menuFalse} class:active={segment === undefined} href=".">Početna</a>
        <a class="navigation-item" rel="prefetch" on:click={menuFalse} class:active={segment === 'proizvodi'} href="proizvodi">Proizvodi</a>
        <a class="navigation-item" rel="prefetch" on:click={menuFalse} class:active={segment === 'strucni-savjeti'} href="strucni-savjeti">Stručni savjeti</a>
        <a class="navigation-item" rel="prefetch" on:click={menuFalse} class:active={segment === 'o-nama'} href="o-nama">O nama</a>
        <a class="navigation-item" rel="prefetch" on:click={menuFalse} class:active={segment === 'nas-tim'} href="nas-tim">Naš tim</a>
        <a class="navigation-item" rel="prefetch" on:click={menuFalse} class:active={segment === 'dokumenti'} href="dokumenti">Dokumenti</a>
        <a class="navigation-item" rel="prefetch" on:click={menuFalse} class:active={segment === 'kontakt'} href="kontakt">Kontakt</a>
        <a class="navigation-item" rel="prefetch" on:click={menuFalse} class:active={segment === 'trazi'} href="trazi">Traži</a>
    </div>
</nav>
