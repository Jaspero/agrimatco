<script>
  import ProductCard from '../../../components/ProductCard.svelte';

  let groups = [
    {
      name: '',
      items: [
        {
          title: 'Bioplex',
          description: 'Tekuće folijarno gnojivo i biostimulator za jačanje biljnih funkcija',
          image: 'stimulatori-porasta-i-poboljsivaci-tla/bioplex.png',
          link: 'katalozi/2023-gnojidba-prihrana-zastita.pdf#page=23'
        },
        {
          title: 'Calcium Mainstay',
          description:
            'Tekući kalcij-oksid (CaO) za poboljšanje kvalitete ploda pri svim vrstama navodnjavanja i folijarno',
          image: 'stimulatori-porasta-i-poboljsivaci-tla/calcium-mainstay.jpg',
          link: 'katalozi/2023-gnojidba-prihrana-zastita.pdf#page=21'
        },
        {
          title: 'Kelatex Ca+B',
          description: 'Vodotopivo gnojivo za folijarnu primjenu za visoku oplodnju',
          image: 'stimulatori-porasta-i-poboljsivaci-tla/kelatex-ca-b.jpg',
          link: 'katalozi/2023-gnojidba-prihrana-zastita.pdf#page=25'
        },
        {
          title: 'Aminoton',
          description: 'Aktivator plodnosti tla s aminokiselinama za tlo i folijarnu primjenu',
          image: 'stimulatori-porasta-i-poboljsivaci-tla/aminoton.jpg',
          link: 'katalozi/2023-gnojidba-prihrana-zastita.pdf#page=26'
        },
        {
          title: 'Riviter HFA ',
          description: 'Organsko tekuće gnojivo na osnovu huminskih fulvo kiselina',
          image: 'stimulatori-porasta-i-poboljsivaci-tla/riviter-HFA.jpg',
          link: 'katalozi/2023-gnojidba-prihrana-zastita.pdf#page=26'
        },
        {
          title: 'Staygreen',
          description: 'Gnojivo - Zaštita biljaka od stresnih klimatskih utjecaja',
          image: 'stimulatori-porasta-i-poboljsivaci-tla/staygreen.jpg',
          link: 'katalozi/2023-gnojidba-prihrana-zastita.pdf#page=28'
        },
        {
          title: 'Ekotron',
          description: 'Organsko gnojivo za popravak degradiranog tla',
          image: 'stimulatori-porasta-i-poboljsivaci-tla/ekotron.webp',
          link: 'katalozi/2023-gnojidba-prihrana-zastita.pdf#page=42'
        },
        {
          title: 'H-85',
          description: 'Stimulator tla koji sadrži huminske i fulvo kiseline',
          image: 'stimulatori-porasta-i-poboljsivaci-tla/h-85.jpg',
          link: 'katalozi/2023-gnojidba-prihrana-zastita.pdf#page=43'
        },
        {
          title: 'Biolife ',
          description: 'Mikrobiološki preparat stimulativnog djelovanja',
          image: 'stimulatori-porasta-i-poboljsivaci-tla/biolife.png',
          link: 'katalozi/2023-gnojidba-prihrana-zastita.pdf#page=43'
        },
        {
          title: 'Wopro Terra',
          description:
            'NPK 4-3-2+Mg, S,' +
            ' Ca; NPK 4-10-2+Mg, S, Ca;' +
            ' NPK 10-7-1+Mg, S, Ca;' +
            ' NPK 1-1-15+Mg, S, Ca;',
          image: 'stimulatori-porasta-i-poboljsivaci-tla/wopro-terra.png',
          link: ''
        }
      ]
    }
  ];
</script>

<svelte:head>
  <title>Agrimatco | Proizvodi | Stimulatori porasta i poboljšivači tla</title>
</svelte:head>

<section class="section">
  <div class="container">
    <nav>
      <small><a href="/proizvodi">Proizvodi</a> > Stimulatori porasta i poboljšivači tla</small>
    </nav>
    <h1>Stimulatori porasta i poboljšivači tla</h1>
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
