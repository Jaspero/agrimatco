<script>
  import ProductCard from '../../../components/ProductCard.svelte';

  let groups = [
    {
      name: '',
      items: [
        {
          title: 'AMCO-drip',
          description: '',
          image: 'navodnjavanje/amco-drip.jpeg',
          link: 'katalozi/2023-gnojidba-prihrana-zastita.pdf#page=64'
        },
        {
          title: 'Akona',
          description: '',
          image: 'navodnjavanje/akona.jpg',
          link: 'katalozi/2023-gnojidba-prihrana-zastita.pdf#page=65'
        },
        {
          title: 'Sumika',
          description: '',
          image: 'navodnjavanje/sumika.jpg',
          link: 'katalozi/2023-gnojidba-prihrana-zastita.pdf#page=66'
        },
        {
          title: 'Azud Sprint',
          description: '',
          image: 'navodnjavanje/azud.jpg',
          link: 'katalozi/2023-gnojidba-prihrana-zastita.pdf#page=64'
        }
      ]
    }
  ];
</script>

<svelte:head>
  <title>Agrimatco | Proizvodi | Navodnjavanje</title>
</svelte:head>

<section class="section">
  <div class="container">
    <nav><small><a href="/proizvodi">Proizvodi</a> > Navodnjavanje</small></nav>
    <h1>Navodnjavanje</h1>
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
