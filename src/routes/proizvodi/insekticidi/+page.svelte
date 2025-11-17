<script>
  import ProductCard from '../../../components/ProductCard.svelte';

  let groups = [
    {
      name: '',
      items: [
        {
          title: 'Demetrina 25 EC',
          description: 'Deltamethrin 25g/L',
          image: 'insekticidi/demetrina-1.jpg',
          link: 'katalozi/2023-gnojidba-prihrana-zastita.pdf#page=59'
        }
      ]
    }
  ];
</script>

<svelte:head>
  <title>Agrimatco | Proizvodi | Insekticidi</title>
</svelte:head>

<section class="section">
  <div class="container">
    <nav><small><a href="/proizvodi">Proizvodi</a> > Insekticidi</small></nav>
    <h1>Insekticidi</h1>
    {#each groups as group}
      <h2>{group.name}</h2>
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
