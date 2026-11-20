<script>
  // Bundled (not linked from app.html) so it is inlined into the page with the component styles: no
  // render-blocking stylesheet request before the first paint (see inlineStyleThreshold in svelte.config.js).
  import '../global.css';
  import Header from '../components/Header.svelte';
  import Navigation from '../components/Navigation.svelte';
  import Footer from '../components/Footer.svelte';
  import { page } from '$app/stores';

  let menu = false;
  function menuToggle() {
    menu = !menu;
    if (menu) {
      document.body.classList.add('scroll-disabled');
    } else {
      document.body.classList.remove('scroll-disabled');
    }
  }
  function menuFalse() {
    menu = false;
    document.body.classList.remove('scroll-disabled');
  }
  /** Esc closes the mobile menu and puts focus back on the MENU button. */
  function handleKeydown(e) {
    if (menu && e.key === 'Escape') {
      menuFalse();
      document.getElementById('menu-button')?.focus();
    }
  }
</script>

<svelte:window on:keydown={handleKeydown} />

<svelte:head>
  <meta
    name="description"
    content="Agrimatco d.o.o.: gnojiva, sredstva za zaštitu bilja, profesionalno sjeme povrća, navodnjavanje i mulch folije te stručni savjeti za poljoprivrednu proizvodnju."
  />
</svelte:head>

<a class="skip-link" href="#sadrzaj">Preskoči na sadržaj</a>

<Header {menu} {menuToggle} />

<Navigation {menu} {menuToggle} {menuFalse} />

<main id="sadrzaj" tabindex="-1">
  <slot></slot>
</main>

<Footer />
