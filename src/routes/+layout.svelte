<script>
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
</script>

<svelte:head>
  <meta
    name="description"
    content="Agrimatco d.o.o.: gnojiva, sredstva za zaštitu bilja, profesionalno sjeme povrća, navodnjavanje i mulch folije te stručni savjeti za poljoprivrednu proizvodnju."
  />
</svelte:head>

<Header {menu} {menuToggle} />

<Navigation {menu} {menuToggle} {menuFalse} />

<main>
  <slot></slot>
</main>

<Footer />
