<script>
  import ProductCard from '../../../components/ProductCard.svelte';

  let groups = [
    {
      name: 'Lubenica',
      items: [
        {
          title: 'Early Samantha F1',
          description: 'Dobavljač: United Genetics',
          image: 'sjeme-povrca/plodno-povrce/lubenica/early-samantha-f1.jpg',
          link: 'katalozi/sjeme-povrca-2025.pdf#page=44'
        },
        {
          title: 'Early Crimara F1',
          description: 'Dobavljač: United Genetics',
          image: 'sjeme-povrca/plodno-povrce/lubenica/early-crimara-f1.jpg',
          link: 'katalozi/sjeme-povrca-2025.pdf#page=44'
        },
        {
          title: 'Karnakata F1',
          description: 'Dobavljač: United Genetics',
          image: 'sjeme-povrca/plodno-povrce/lubenica/karnakata-f1.jpg',
          link: 'katalozi/sjeme-povrca-2025.pdf#page=44'
        },
        {
          title: 'Samantha F1',
          description: 'Dobavljač: United Genetics',
          image: 'sjeme-povrca/plodno-povrce/lubenica/samantha-f1.jpg',
          link: 'katalozi/sjeme-povrca-2025.pdf#page=45'
        },
        {
          title: 'Marbella F1',
          description: 'Dobavljač: United Genetics',
          image: 'sjeme-povrca/plodno-povrce/lubenica/marbella-f1.jpg',
          link: 'katalozi/sjeme-povrca-2025.pdf#page=45'
        },
        {
          title: 'Prismatica F1',
          description: 'Dobavljač: United Genetics',
          image: 'sjeme-povrca/plodno-povrce/lubenica/prismatica-f1.jpg',
          link: 'katalozi/sjeme-povrca-2025.pdf#page=45'
        },
        {
          title: 'Odyssey F1',
          description: 'Dobavljač: Sakata',
          image: 'sjeme-povrca/plodno-povrce/lubenica/odyssey-f1.jpg',
          link: 'katalozi/sjeme-povrca-2025.pdf#page=46'
        },
        {
          title: 'Celest F1',
          description: 'Dobavljač: Sakata',
          image: 'sjeme-povrca/plodno-povrce/lubenica/celest.jpg',
          link: 'katalozi/sjeme-povrca-2025.pdf#page=46'
        },
        {
          title: 'Lusia F1',
          description: 'Dobavljač: Vilmorin',
          image: 'sjeme-povrca/plodno-povrce/lubenica/lusia-f1.jpg',
          link: 'katalozi/sjeme-povrca-2025.pdf#page=47'
        },
        {
          title: 'Romeria F1',
          description: 'Dobavljač: United Genetics',
          image: 'sjeme-povrca/plodno-povrce/lubenica/romeria-f1.jpg',
          link: 'katalozi/sjeme-povrca-2025.pdf#page=47'
        },
        {
          title: 'Obla F1',
          description: 'Dobavljač: Esasem',
          image: 'sjeme-povrca/plodno-povrce/lubenica/obla-f1.jpg',
          link: 'katalozi/sjeme-povrca-2025.pdf#page=46'
        },
        {
          title: 'Ketty F1',
          description: 'Dobavljač: Esasem',
          image: 'sjeme-povrca/plodno-povrce/lubenica/ketty.jpg',
          link: 'katalozi/sjeme-povrca-2025.pdf#page=47'
        },
        {
          title: 'Minnie F1',
          description: 'Dobavljač: United Genetics)',
          image: 'sjeme-povrca/plodno-povrce/lubenica/minnie.jpg',
          link: 'katalozi/sjeme-povrca-2025.pdf#page=47'
        }
      ]
    },
    {
      name: 'Podloga za cijepljenje lubenica',
      items: [
        {
          title: 'Routpower',
          description: 'Dobavljač: Sakata',
          image: 'sjeme-povrca/plodno-povrce/podloga-za-cijeplenje-lubenica/routpower.jpg',
          link: 'katalozi/sjeme-povrca-2025.pdf#page=48'
        },
        {
          title: 'Polifemo',
          description: 'Dobavljač: Sakata',
          image: 'sjeme-povrca/plodno-povrce/podloga-za-cijeplenje-lubenica/polifemo.jpg',
          link: 'katalozi/sjeme-povrca-2025.pdf#page=48'
        }
      ]
    },
    {
      name: 'Dinja',
      items: [
        {
          title: 'Wrangler F1',
          description: 'Dobavljač: SAIS',
          image: 'sjeme-povrca/plodno-povrce/dinja/wrangler-f1.jpg',
          link: 'katalozi/sjeme-povrca-2025.pdf#page=48'
        },
        {
          title: 'Portento',
          description: 'Dobavljač: United Genetics',
          image: 'sjeme-povrca/plodno-povrce/dinja/portento.jpg',
          link: 'katalozi/sjeme-povrca-2025.pdf#page=49'
        },
        {
          title: 'Jannet',
          description: 'Dobavljač: Esasem',
          image: 'sjeme-povrca/plodno-povrce/dinja/jannet.jpg',
          link: 'katalozi/sjeme-povrca-2025.pdf#page=49'
        },
        {
          title: 'Varenne F1',
          description: 'Dobavljač: Mira Seeds',
          image: 'sjeme-povrca/plodno-povrce/dinja/varenne.jpg',
          link: 'katalozi/sjeme-povrca-2025.pdf#page=49'
        }
      ]
    },
    {
      name: 'Tikva',
      items: [
        {
          title: 'Ariel F1',
          description: 'Dobavljač: Sakata',
          image: 'sjeme-povrca/plodno-povrce/tikva/ariel-f1.jpg',
          link: 'katalozi/sjeme-povrca-2025.pdf#page=52'
        },
        {
          title: 'Pluto',
          description: 'Dobavljač: Sakata',
          image: 'sjeme-povrca/plodno-povrce/tikva/pluto.png',
          link: 'katalozi/sjeme-povrca-2025.pdf#page=52'
        },
        {
          title: 'Veenas F1',
          description: 'Dobavljač: Sakata',
          image: 'sjeme-povrca/plodno-povrce/tikva/veenas-f1.jpg',
          link: 'katalozi/sjeme-povrca-2025.pdf#page=52'
        },
        {
          title: 'Yellowboys F1',
          description: 'Dobavljač: Semo',
          image: 'sjeme-povrca/plodno-povrce/tikva/yellowboys-f1.jpg',
          link: 'katalozi/sjeme-povrca-2025.pdf#page=52'
        },
        {
          title: 'Yellowgirls F1',
          description: 'Dobavljač: Semo',
          image: 'sjeme-povrca/plodno-povrce/tikva/yellowgirls-f1.jpg',
          link: 'katalozi/sjeme-povrca-2025.pdf#page=52'
        },
        {
          title: 'Hokkaido Orange',
          description: 'Dobavljač: Semo',
          image: 'sjeme-povrca/plodno-povrce/tikva/hokkaido-orange.jpg',
          link: 'katalozi/sjeme-povrca-2025.pdf#page=53'
        },
        {
          title: 'Delica F1',
          description: 'Dobavljač: Semo',
          image: 'sjeme-povrca/plodno-povrce/tikva/delica-f1.jpg',
          link: 'katalozi/sjeme-povrca-2025.pdf#page=53'
        },
        {
          title: 'Crown Prince F1',
          description: 'Dobavljač: Sakata',
          image: 'sjeme-povrca/plodno-povrce/tikva/crown-prince-f1.jpg',
          link: 'katalozi/sjeme-povrca-2025.pdf#page=53'
        },
        {
          title: 'Quintale Seme Giallo',
          description: 'Dobavljač: SAIS',
          image: 'sjeme-povrca/plodno-povrce/tikva/quintale-seme.jpg',
          link: 'katalozi/sjeme-povrca-2025.pdf#page=53'
        },
        {
          title: 'Colinky ',
          description: 'Dobavljač: Sakata',
          image: 'sjeme-povrca/plodno-povrce/tikva/colinky.jpg',
          link: 'katalozi/sjeme-povrca-2025.pdf#page=53'
        }
      ]
    },
    {
      name: 'Tikvica',
      items: [
        {
          title: 'Ascona',
          description: 'Dobavljač: Sakata',
          image: 'sjeme-povrca/plodno-povrce/tikvica/ascona.jpg',
          link: 'katalozi/sjeme-povrca-2025.pdf#page=51'
        },
        {
          title: 'Tendor F1',
          description: 'Dobavljač: Vilmorin',
          image: 'sjeme-povrca/plodno-povrce/tikvica/tendor-f1.jpg',
          link: 'katalozi/sjeme-povrca-2025.pdf#page=51'
        },
        {
          title: 'Black Star F1',
          description: 'Dobavljač: United Genetics',
          image: 'sjeme-povrca/plodno-povrce/tikvica/black-star.jpg',
          link: 'katalozi/sjeme-povrca-2025.pdf#page=51'
        }
      ]
    },
    {
      name: 'Rajčica',
      items: [
        {
          title: 'Signora F1',
          description: 'Dobavljač: Esasem',
          image: 'sjeme-povrca/plodno-povrce/rajcica/signora-f1.jpg',
          link: 'katalozi/sjeme-povrca-2025.pdf#page=56'
        },
        {
          title: 'Yety F1',
          description: 'Dobavljač: Sakata',
          image: 'sjeme-povrca/plodno-povrce/rajcica/yety-f1.jpg',
          link: 'katalozi/sjeme-povrca-2025.pdf#page=56'
        },
        {
          title: 'Rosalba F1',
          description: 'Dobavljač: Esasem',
          image: 'sjeme-povrca/plodno-povrce/rajcica/rosalba-f1.jpg',
          link: 'katalozi/sjeme-povrca-2025.pdf#page=57'
        },
        {
          title: 'VP1 F1',
          description: 'Dobavljač: Vilmorin',
          image: 'sjeme-povrca/plodno-povrce/rajcica/vp1-f1.jpg',
          link: 'katalozi/sjeme-povrca-2025.pdf#page=57'
        },
        {
          title: 'VP2 F1',
          description: 'Dobavljač: Vilmorin',
          image: 'sjeme-povrca/plodno-povrce/rajcica/vp2.jpg',
          link: 'katalozi/sjeme-povrca-2025.pdf#page=57'
        },
        {
          title: 'Hayet F1',
          description: 'Dobavljač: Sakata',
          image: 'sjeme-povrca/plodno-povrce/rajcica/hayet.jpg',
          link: 'katalozi/sjeme-povrca-2025.pdf#page=56'
        },
        {
          title: 'Pink Impression F1',
          description: 'Dobavljač: Sakata',
          image: 'sjeme-povrca/plodno-povrce/rajcica/pink-impression-f1.jpg',
          link: 'katalozi/sjeme-povrca-2025.pdf#page=57'
        },
        {
          title: 'Fuji Pink F1',
          description: 'Dobavljač: Sakata',
          image: 'sjeme-povrca/plodno-povrce/rajcica/fuji-pink-f1.jpg',
          link: 'katalozi/sjeme-povrca-2025.pdf#page=58'
        },
        {
          title: 'Ricciolo',
          description: 'Dobavljač: United Genetics',
          image: 'sjeme-povrca/plodno-povrce/rajcica/ricciolo.jpg',
          link: 'katalozi/sjeme-povrca-2025.pdf#page=58'
        },
        {
          title: 'Jangcy F1',
          description: 'Dobavljač: Vilmorin',
          image: 'sjeme-povrca/plodno-povrce/rajcica/jangcy.JPG',
          link: 'katalozi/sjeme-povrca-2025.pdf#page=58'
        },
        {
          title: 'Sauron',
          description: 'Dobavljač: Esasem',
          image: 'sjeme-povrca/plodno-povrce/rajcica/sauron-f1.jpg',
          link: 'katalozi/sjeme-povrca-2025.pdf#page=58'
        },
        {
          title: 'San Remo F1',
          description: 'Dobavljač: United Genetics',
          image: 'sjeme-povrca/plodno-povrce/rajcica/san-remo-f1.jpg',
          link: 'katalozi/sjeme-povrca-2025.pdf#page=58'
        },
        {
          title: 'Dolcecuore F1',
          description: 'Dobavljač: United Genetics',
          image: 'sjeme-povrca/plodno-povrce/rajcica/dolcecuore.jpg',
          link: 'katalozi/sjeme-povrca-2025.pdf#page=58'
        },
        {
          title: 'Belmonte F1',
          description: 'Dobavljač: Esasem',
          image: 'sjeme-povrca/plodno-povrce/rajcica/belmonte.jpg',
          link: 'katalozi/sjeme-povrca-2025.pdf#page=58'
        },
        {
          title: 'Cappuccino F!',
          description: 'Dobavljač: SAIS',
          image: 'sjeme-povrca/plodno-povrce/rajcica/cappuccino.jpg',
          link: 'katalozi/sjeme-povrca-2025.pdf#page=59'
        },
        {
          title: 'Cornabel F1',
          description: 'Dobavljač: Vilmorin',
          image: 'sjeme-povrca/plodno-povrce/rajcica/cornabel.JPG',
          link: 'katalozi/sjeme-povrca-2025.pdf#page=59'
        },
        {
          title: 'Prezioso F1',
          description: 'Dobavljač: Esasem',
          image: 'sjeme-povrca/plodno-povrce/rajcica/prezioso-f1.jpg',
          link: 'katalozi/sjeme-povrca-2025.pdf#page=60'
        },
        {
          title: 'Star Gold F1',
          description: 'Dobavljač: Esasem',
          image: 'sjeme-povrca/plodno-povrce/rajcica/star-gold.jpg',
          link: 'katalozi/sjeme-povrca-2025.pdf#page=60'
        },
        {
          title: 'Porpora F1',
          description: 'Dobavljač: Esasem',
          image: 'sjeme-povrca/plodno-povrce/rajcica/porpora-f1.jpg',
          link: 'katalozi/sjeme-povrca-2025.pdf#page=60'
        },
        {
          title: 'Lobello F1',
          description: 'Dobavljač: Esasem',
          image: 'sjeme-povrca/plodno-povrce/rajcica/lobello-f1.jpg',
          link: 'katalozi/sjeme-povrca-2025.pdf#page=60'
        },
        {
          title: 'Collina F1',
          description: 'Dobavljač: Esasem',
          image: 'sjeme-povrca/plodno-povrce/rajcica/collina-f1.jpg',
          link: 'katalozi/sjeme-povrca-2025.pdf#page=60'
        },
        {
          title: 'Napika F1',
          description: 'Dobavljač: Esasem',
          image: 'sjeme-povrca/plodno-povrce/rajcica/napika-f1.jpg',
          link: 'katalozi/sjeme-povrca-2025.pdf#page=60'
        },
        {
          title: 'Big Rio F1',
          description: 'Dobavljač: United Genetics',
          image: 'sjeme-povrca/plodno-povrce/rajcica/big-rio.jpg',
          link: 'katalozi/sjeme-povrca-2025.pdf#page=62'
        },
        {
          title: 'Templar F1',
          description: 'Dobavljač: Isi Sementi',
          image: 'sjeme-povrca/plodno-povrce/rajcica/templar.jpg',
          link: 'katalozi/sjeme-povrca-2025.pdf#page=62'
        },
        {
          title: 'Rossano F1',
          description: 'Dobavljač: Esasem',
          image: 'sjeme-povrca/plodno-povrce/rajcica/rossano-f1.jpg',
          link: 'katalozi/sjeme-povrca-2025.pdf#page=61'
        },
        {
          title: 'Troy F1 (Linda F1)',
          description: 'Dobavljač: Sakata',
          image: 'sjeme-povrca/plodno-povrce/rajcica/troy-f1.jpg',
          link: 'katalozi/sjeme-povrca-2025.pdf#page=61'
        },
        {
          title: 'Kero F1',
          description: 'Dobavljač: Esasem',
          image: 'sjeme-povrca/plodno-povrce/rajcica/kero-f1.jpg',
          link: 'katalozi/sjeme-povrca-2025.pdf#page=62'
        }
      ]
    },
    {
      name: 'Paprika',
      items: [
        {
          title: 'Bernita F1',
          description: 'Dobavljač: Duna-r',
          image: 'sjeme-povrca/plodno-povrce/paprika/bernita-f1.jpg',
          link: 'katalozi/sjeme-povrca-2025.pdf#page=63'
        },
        {
          title: 'Bibic F1',
          description: 'Dobavljač: Duna-r',
          image: 'sjeme-povrca/plodno-povrce/paprika/bibic-f1.jpg',
          link: 'katalozi/sjeme-povrca-2025.pdf#page=63'
        },
        {
          title: 'Bagoly F1',
          description: 'Dobavljač: Duna-r',
          image: 'sjeme-povrca/plodno-povrce/paprika/bagoly-f1.jpg',
          link: 'katalozi/sjeme-povrca-2025.pdf#page=63'
        },
        {
          title: 'Bobita F1',
          description: 'Dobavljač: Duna-r',
          image: 'sjeme-povrca/plodno-povrce/paprika/bobita-f1.jpg',
          link: 'katalozi/sjeme-povrca-2025.pdf#page=64'
        },
        {
          title: 'Lisenka F1',
          description: 'Dobavljač: Duna-r',
          image: 'sjeme-povrca/plodno-povrce/paprika/lisenka-f1.jpg',
          link: 'katalozi/sjeme-povrca-2025.pdf#page=63'
        },
        {
          title: 'Ester F1',
          description: 'Dobavljač: Duna-r',
          image: 'sjeme-povrca/plodno-povrce/paprika/ester-f1.jpg',
          link: 'katalozi/sjeme-povrca-2025.pdf#page=67'
        },
        {
          title: 'Steffi F1',
          description: 'Dobavljač: CAPSICO',
          image: 'sjeme-povrca/plodno-povrce/paprika/steffi.jpg',
          link: 'katalozi/sjeme-povrca-2025.pdf#page=67'
        },
        {
          title: 'Szalva  F1',
          description: 'Dobavljač: Duna-r',
          image: 'sjeme-povrca/plodno-povrce/paprika/szalva.jpg',
          link: 'katalozi/sjeme-povrca-2025.pdf#page=67'
        },
        {
          title: 'Jablina  F1',
          description: 'Dobavljač: SEMO',
          image: 'sjeme-povrca/plodno-povrce/paprika/jablina.jpg',
          link: 'katalozi/sjeme-povrca-2025.pdf#page=67'
        },
        {
          title: 'Spartaco F1',
          description: 'Dobavljač: Esasem',
          image: 'sjeme-povrca/plodno-povrce/paprika/spartaco-f1.jpg',
          link: 'katalozi/sjeme-povrca-2025.pdf#page=67'
        },
        {
          title: 'Salana F1',
          description: 'Dobavljač: Sakata',
          image: 'sjeme-povrca/plodno-povrce/paprika/salana-f1.jpg',
          link: 'katalozi/sjeme-povrca-2025.pdf#page=64'
        },
        {
          title: 'Goldano',
          description: 'Dobavljač: CAPSICO',
          image: 'sjeme-povrca/plodno-povrce/paprika/goldano.jpg',
          link: 'katalozi/sjeme-povrca-2025.pdf#page=65'
        },
        {
          title: 'Silverado',
          description: 'Dobavljač: CAPSICO',
          image: 'sjeme-povrca/plodno-povrce/paprika/silverado.jpg',
          link: 'katalozi/sjeme-povrca-2025.pdf#page=65'
        },
        {
          title: 'Vazul F1',
          description: 'Dobavljač: DUNA',
          image: 'sjeme-povrca/plodno-povrce/paprika/vazul.jpg',
          link: 'katalozi/sjeme-povrca-2025.pdf#page=65'
        },
        {
          title: 'Bodrog F1',
          description: 'Dobavljač: CAPSICO',
          image: 'sjeme-povrca/plodno-povrce/paprika/bodrog.jpg',
          link: 'katalozi/sjeme-povrca-2025.pdf#page=66'
        },
        {
          title: 'Borka',
          description: 'Dobavljač: CAPSICO',
          image: 'sjeme-povrca/plodno-povrce/paprika/borka.jpg',
          link: 'katalozi/sjeme-povrca-2025.pdf#page=66'
        },
        {
          title: 'Emese  F1',
          description: 'Dobavljač: DUNA',
          image: 'sjeme-povrca/plodno-povrce/paprika/emmese.jpg',
          link: 'katalozi/sjeme-povrca-2025.pdf#page=66'
        },
        {
          title: 'Sobri   F1',
          description: 'Dobavljač: DUNA',
          image: 'sjeme-povrca/plodno-povrce/paprika/sobri.jpg',
          link: 'katalozi/sjeme-povrca-2025.pdf#page=66'
        },
        {
          title: 'Rafaelus F1',
          description: 'Dobavljač: Semo',
          image: 'sjeme-povrca/plodno-povrce/paprika/rafaelus.jpg',
          link: 'katalozi/sjeme-povrca-2025.pdf#page=68'
        },
        {
          title: 'Kadet F1',
          description: 'Dobavljač: Duna-r',
          image: 'sjeme-povrca/plodno-povrce/paprika/kadet-f1.jpg',
          link: 'katalozi/sjeme-povrca-2025.pdf#page=68'
        },
        {
          title: 'Eugenia F1',
          description: 'Dobavljač: CAPSICO',
          image: 'sjeme-povrca/plodno-povrce/paprika/eugenia.jpg',
          link: 'katalozi/sjeme-povrca-2025.pdf#page=69'
        },
        {
          title: 'Archivarius F1 (D1611/961)',
          description: 'Dobavljač: Duna-r',
          image: 'sjeme-povrca/plodno-povrce/paprika/archivarius-f1.jpg',
          link: 'katalozi/sjeme-povrca-2025.pdf#page=68'
        },
        {
          title: 'Mathias F1',
          description: 'Dobavljač: CAPSICO',
          image: 'sjeme-povrca/plodno-povrce/paprika/mathias.jpg',
          link: 'katalozi/sjeme-povrca-2025.pdf#page=69'
        },
        {
          title: 'Toldi  F1',
          description: 'Dobavljač: Duna-r',
          image: 'sjeme-povrca/plodno-povrce/paprika/toldi.jpg',
          link: 'katalozi/sjeme-povrca-2025.pdf#page=69'
        },
        {
          title: 'Ohnivec',
          description: 'Dobavljač: SEMO',
          image: 'sjeme-povrca/plodno-povrce/paprika/ohnivec-1.jpg',
          link: 'katalozi/sjeme-povrca-2025.pdf#page=70'
        },
        {
          title: 'Spriralus',
          description: 'Dobavljač: SEMO',
          image: 'sjeme-povrca/plodno-povrce/paprika/spiralus-1.JPG',
          link: 'katalozi/sjeme-povrca-2025.pdf#page=70'
        },
        {
          title: 'Palivec',
          description: 'Dobavljač: SEMO',
          image: 'sjeme-povrca/plodno-povrce/paprika/palivec-1.jpg',
          link: 'katalozi/sjeme-povrca-2025.pdf#page=70'
        }
      ]
    },
    {
      name: 'Podloga za papriku',
      items: [
        {
          title: 'Rocal F1',
          description: 'Dobavljač: ESASEM',
          image: 'sjeme-povrca/plodno-povrce/paprika/rocal.jpg',
          link: 'katalozi/sjeme-povrca-2025.pdf#page=70'
        }
      ]
    },
    {
      name: 'Krastavac',
      items: [
        {
          title: 'Anya  F1',
          description: 'Dobavljač: Semo',
          image: 'sjeme-povrca/plodno-povrce/krastavac/anya.jpg',
          link: 'katalozi/sjeme-povrca-2025.pdf#page=72'
        },
        {
          title: 'Ronda F1',
          description: 'Dobavljač: Sakata',
          image: 'sjeme-povrca/plodno-povrce/krastavac/ronda-f1.jpg',
          link: 'katalozi/sjeme-povrca-2025.pdf#page=72'
        },
        {
          title: 'Goghen F1',
          description: 'Dobavljač: Esasem',
          image: 'sjeme-povrca/plodno-povrce/krastavac/goghen-f1.jpg',
          link: 'katalozi/sjeme-povrca-2025.pdf#page=72'
        }
      ]
    },
    {
      name: 'Patliđan',
      items: [
        {
          title: 'Clelia F1',
          description: 'Dobavljač: Esasem',
          image: 'sjeme-povrca/plodno-povrce/patlidan/clelia-f1.jpg',
          link: 'katalozi/sjeme-povrca-2025.pdf#page=73'
        },
        {
          title: 'Mirval F1',
          description: 'Dobavljač: Vilmorin',
          image: 'sjeme-povrca/plodno-povrce/patlidan/mirval-f1.jpg',
          link: 'katalozi/sjeme-povrca-2025.pdf#page=73'
        }
      ]
    },
    {
      name: 'Kukuruz šećerac',
      items: [
        {
          title: 'Kiara F1',
          description: 'Dobavljač: Vilmorin',
          image: 'sjeme-povrca/plodno-povrce/kukuruz-secerac/kiara-f1.jpg',
          link: 'katalozi/sjeme-povrca-2025.pdf#page=74'
        },
        {
          title: 'Kinze F1',
          description: 'Dobavljač: Vilmorin',
          image: 'sjeme-povrca/plodno-povrce/kukuruz-secerac/kinze-f1.jpg',
          link: 'katalozi/sjeme-povrca-2025.pdf#page=74'
        },
        {
          title: 'Turbo F1',
          description: 'Dobavljač: Vilmorin',
          image: 'sjeme-povrca/plodno-povrce/kukuruz-secerac/turbo-f1.jpg',
          link: 'katalozi/sjeme-povrca-2025.pdf#page=74'
        }
      ]
    }
  ];
</script>

<svelte:head>
  <title>Agrimatco | Proizvodi | Plodno povrće</title>
</svelte:head>

<section class="section">
  <div class="container">
    <nav><small><a href="/proizvodi">Proizvodi</a> > Plodno povrće</small></nav>
    <h1>Plodno povrće</h1>
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
