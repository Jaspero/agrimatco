<script>
  import ProductCard from '../../../components/ProductCard.svelte';

  let groups = [
    {
      name: '',
      items: [
        {
          title: 'GranuPotasse',
          description: 'Granulirano gnojivo koje osigurava optimalnu prihranu kalija i sumpora',
          image: 'granulirana-gnojiva/granupotasse.png',
          link: 'katalozi/2023-gnojidba-prihrana-zastita.pdf#page=10'
        },
        {
          title: 'Alba Grow',
          description: 'Startno gnojivo nove generacije',
          image: 'granulirana-gnojiva/alba-grow.png',
          link: 'katalozi/2023-gnojidba-prihrana-zastita.pdf#page=11'
        },
        {
          title: 'Fertium Fuerza',
          description: 'Osnovno i predsjetveno gnojivo',
          image: 'granulirana-gnojiva/fertium_fuerza.png',
          link: 'katalozi/2023-gnojidba-prihrana-zastita.pdf#page=10'
        },
        {
          title: 'Sangral 12-0-46',
          description: 'Predsjetveno gnojivo, kalij nitrat',
          image: 'granulirana-gnojiva/sangral.png',
          link: 'katalozi/2023-gnojidba-prihrana-zastita.pdf#page=12'
        }
      ]
    }
  ];
</script>

<svelte:head>
  <title>Agrimatco | Proizvodi | Granulirana gnojiva</title>
</svelte:head>

<section class="section">
  <div class="container">
    <nav><small><a href="/proizvodi">Proizvodi</a> > Granulirana gnojiva</small></nav>
    <h1>Granulirana gnojiva</h1>
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
