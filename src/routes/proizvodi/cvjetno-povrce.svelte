<svelte:head>
    <title>Agrimatco | Proizvodi | Cvjetno povrće</title>
</svelte:head>

<script>
    import ProductCard from '../../components/ProductCard.svelte';

    let groups = [
        {
            name: 'Brokula',
            items: [
                {
                    title: 'Green Magic F1',
                    description: 'Dobavljač: Sakata',
                    image: 'sjeme-povrca/cvjetno-povrce/brokula/green-magic-f1.jpg',
                    link: 'katalozi/2022-sjeme-povrca.pdf#page=28'
                },
                {
                    title: 'Naxos F1',
                    description: 'Dobavljač: Sakata',
                    image: 'sjeme-povrca/cvjetno-povrce/brokula/naxos-f1.jpg',
                    link: 'katalozi/2022-sjeme-povrca.pdf#page=28'
                },
                {
                    title: 'Parthenon F1',
                    description: 'Dobavljač: Sakata',
                    image: 'sjeme-povrca/cvjetno-povrce/brokula/parthenon-f1.jpg',
                    link: 'katalozi/2022-sjeme-povrca.pdf#page=28'
                },
                {
                    title: 'Ares F1',
                    description: 'Dobavljač: Sakata',
                    image: 'sjeme-povrca/cvjetno-povrce/brokula/ares-f1.jpg',
                    link: 'katalozi/2022-sjeme-povrca.pdf#page=28'
                },
                {
                    title: 'Triton F1',
                    description: 'Dobavljač: Sakata',
                    image: 'sjeme-povrca/cvjetno-povrce/brokula/triton-f1.jpg',
                    link: 'katalozi/2022-sjeme-povrca.pdf#page=29'
                },
                {
                    title: 'Thassos F1',
                    description: 'Dobavljač: Sakata',
                    image: 'sjeme-povrca/cvjetno-povrce/brokula/thassos-f1.png',
                    link: 'katalozi/2022-sjeme-povrca.pdf#page=29'
                },
                {
                    title: 'Marathon F1',
                    description: 'Dobavljač: Sakata',
                    image: 'sjeme-povrca/cvjetno-povrce/brokula/marathon-f1.jpg',
                    link: 'katalozi/2022-sjeme-povrca.pdf#page=29'
                }
            ]
        },
        {
            name: 'Cvjetača',
            items: [
                {
                    title: 'Alston F1',
                    description: 'Dobavljač: Sakata',
                    image: 'sjeme-povrca/cvjetno-povrce/cvjetaca/alston-f1.jpg',
                    link: 'katalozi/2022-sjeme-povrca.pdf#page=30'
                },
                {
                    title: 'Cashmere F1',
                    description: 'Dobavljač: Sakata',
                    image: 'sjeme-povrca/cvjetno-povrce/cvjetaca/cashmere-f1.jpg',
                    link: 'katalozi/2022-sjeme-povrca.pdf#page=30'
                },
                {
                    title: 'White step F1',
                    description: 'Dobavljač: Sakata',
                    image: 'sjeme-povrca/cvjetno-povrce/cvjetaca/white-step-f1.jpg',
                    link: 'katalozi/2022-sjeme-povrca.pdf#page=30'
                },
                {
                    title: 'Concept F1',
                    description: 'Dobavljač: Sakata',
                    image: 'sjeme-povrca/cvjetno-povrce/cvjetaca/concept-f1.jpg',
                    link: 'katalozi/2022-sjeme-povrca.pdf#page=30'
                },
                {
                    title: 'Merton F1',
                    description: 'Dobavljač: Sakata',
                    image: 'sjeme-povrca/cvjetno-povrce/cvjetaca/merton-f1.jpg',
                    link: 'katalozi/2022-sjeme-povrca.pdf#page=31'
                },
                {
                    title: 'Kastor F1',
                    description: 'Dobavljač: Sakata',
                    image: 'sjeme-povrca/cvjetno-povrce/cvjetaca/kastor-f1.jpg',
                    link: 'katalozi/2022-sjeme-povrca.pdf#page=31'
                },
                {
                    title: 'Whiton F1',
                    description: 'Dobavljač: Sakata',
                    image: 'sjeme-povrca/cvjetno-povrce/cvjetaca/whiton-f1.jpg',
                    link: 'katalozi/2022-sjeme-povrca.pdf#page=31'
                },
                {
                    title: 'Incline F1',
                    description: 'Dobavljač: Sakata',
                    image: 'sjeme-povrca/cvjetno-povrce/cvjetaca/incline-f1.jpg',
                    link: 'katalozi/2022-sjeme-povrca.pdf#page=32'
                },
                {
                    title: 'Jericho F1',
                    description: 'Dobavljač: Sakata',
                    image: 'sjeme-povrca/cvjetno-povrce/cvjetaca/jericho-f1.jpg',
                    link: 'katalozi/2022-sjeme-povrca.pdf#page=32'
                },
            ]
        }
    ]
</script>

<section class="section">
    <div class="container">
        <nav><small><a rel="prefetch" href="proizvodi">Proizvodi</a> > Cvjetno povrće</small></nav>
        <h1>Cvjetno povrće</h1>
        {#each groups as group}
            <h2>{group.name}</h2>
            <div class="grid">
                {#each group.items as item}
                    <div class="col-4 col-s-6 col-xs-12">
                        <ProductCard title={item.title} description={item.description} image={item.image} link={item.link}/>
                    </div>
                {/each}
            </div>
        {/each}
    </div>
</section>
