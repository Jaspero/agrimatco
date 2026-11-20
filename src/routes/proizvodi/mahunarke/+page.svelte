<script>
  import ProductCard from '../../../components/ProductCard.svelte';

  let groups = [
    {
      name: 'Mahune',
      items: [
        {
          title: 'Primel',
          description: 'Dobavljač: Vilmorin',
          image: 'sjeme-povrca/mahunarke/mahune/primel.jpg',
          link: 'katalozi/sjeme-povrca-2025.pdf#page=55'
        },
        {
          title: 'Sundance',
          description: 'Dobavljač: Vilmorin',
          image: 'sjeme-povrca/mahunarke/mahune/sundance.jpg',
          link: 'katalozi/sjeme-povrca-2025.pdf#page=55'
        },
        {
          title: 'Radovan',
          description: 'Dobavljač: SEMO',
          image: 'sjeme-povrca/mahunarke/mahune/radovan-1.jpg',
          link: 'katalozi/sjeme-povrca-2025.pdf#page=55'
        },
        {
          title: 'Borloto L. Fuoco',
          description: 'Dobavljač: SEMO',
          image: 'sjeme-povrca/mahunarke/mahune/borloto.jpg',
          link: 'katalozi/sjeme-povrca-2025.pdf#page=55'
        }
      ]
    }
  ];
</script>

<svelte:head>
  <title>Agrimatco | Proizvodi | Mahunarke</title>
</svelte:head>

<section class="section">
  <div class="container">
    <nav aria-label="Putanja"><small><a href="/proizvodi">Proizvodi</a> > Mahunarke</small></nav>
    <h1>Mahunarke</h1>
    {#each groups as group}
      {#if group.name}<h2>{group.name}</h2>{/if}
      <div class="grid">
        {#each group.items as item}
          <div class="col-4 col-s-6 col-xs-12">
            <ProductCard
              title={item.title}
              description={item.description}
              image={item.image}
              link={item.link}
            />
          </div>
        {/each}
      </div>
    {/each}
  </div>
</section>
