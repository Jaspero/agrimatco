<script>
	import Header from '../components/Header.svelte';
	import Navigation from '../components/Navigation.svelte';
	import Footer from '../components/Footer.svelte';

	export let segment;

	let menu = false;
	function menuToggle() {
		menu = !menu;
		if (menu) { document.body.classList.add("scroll-disabled"); }
		else { document.body.classList.remove("scroll-disabled"); }
	}
	function menuFalse() {
		menu = false;
		document.body.classList.remove("scroll-disabled");
	}
</script>

<Header menu={menu} menuToggle={menuToggle}/>

<Navigation menu={menu} menuToggle={menuToggle} menuFalse={menuFalse} segment={segment}/>

<main>
	<slot></slot>
</main>

<Footer/>
