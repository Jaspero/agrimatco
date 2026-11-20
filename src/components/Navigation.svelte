<script>
  import { page } from '$app/stores';
  export let menuFalse;
  export let menu;

  $: pathname = $page.url.pathname;
  $: segment = pathname.split('/').filter(Boolean)[0];

  /** Mobile menu: close it when keyboard focus moves out of it (except to the MENU button), so focus never sits behind the overlay. */
  function handleFocusOut(e) {
    if (!menu) return;
    const to = e.relatedTarget;
    if (to && !e.currentTarget.contains(to) && to.id !== 'menu-button') menuFalse();
  }
</script>

<nav id="glavna-navigacija" class="navigation" class:active={menu} aria-label="Glavna navigacija" on:focusout={handleFocusOut}>
  <div class="navigation-container">
    <a
      class="navigation-item"
      data-sveltekit-preload-data="hover"
      on:click={menuFalse}
      class:active={pathname === '/'}
      aria-current={pathname === '/' ? 'page' : undefined}
      href="/">Početna</a
    >
    <a
      class="navigation-item"
      data-sveltekit-preload-data="hover"
      on:click={menuFalse}
      class:active={segment === 'proizvodi'}
      aria-current={segment === 'proizvodi' ? (pathname === '/proizvodi' ? 'page' : 'true') : undefined}
      href="/proizvodi">Proizvodi</a
    >
    <a
      class="navigation-item"
      data-sveltekit-preload-data="hover"
      on:click={menuFalse}
      class:active={segment === 'strucni-savjeti'}
      aria-current={segment === 'strucni-savjeti' ? (pathname === '/strucni-savjeti' ? 'page' : 'true') : undefined}
      href="/strucni-savjeti">Stručni savjeti</a
    >
    <a
      class="navigation-item"
      data-sveltekit-preload-data="hover"
      on:click={menuFalse}
      class:active={segment === 'o-nama'}
      aria-current={segment === 'o-nama' ? (pathname === '/o-nama' ? 'page' : 'true') : undefined}
      href="/o-nama">O nama</a
    >
    <a
      class="navigation-item"
      data-sveltekit-preload-data="hover"
      on:click={menuFalse}
      class:active={segment === 'nas-tim'}
      aria-current={segment === 'nas-tim' ? (pathname === '/nas-tim' ? 'page' : 'true') : undefined}
      href="/nas-tim">Naš tim</a
    >
    <a
      class="navigation-item"
      data-sveltekit-preload-data="hover"
      on:click={menuFalse}
      class:active={segment === 'dokumenti'}
      aria-current={segment === 'dokumenti' ? (pathname === '/dokumenti' ? 'page' : 'true') : undefined}
      href="/dokumenti">Dokumenti</a
    >
    <a
      class="navigation-item"
      data-sveltekit-preload-data="hover"
      on:click={menuFalse}
      class:active={segment === 'kontakt'}
      aria-current={segment === 'kontakt' ? (pathname === '/kontakt' ? 'page' : 'true') : undefined}
      href="/kontakt">Kontakt</a
    >
    <a
      class="navigation-item"
      data-sveltekit-preload-data="hover"
      on:click={menuFalse}
      class:active={segment === 'trazi'}
      aria-current={segment === 'trazi' ? (pathname === '/trazi' ? 'page' : 'true') : undefined}
      href="/trazi">Traži</a
    >
  </div>
</nav>

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
    transition:
      0.2s background,
      color;
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
