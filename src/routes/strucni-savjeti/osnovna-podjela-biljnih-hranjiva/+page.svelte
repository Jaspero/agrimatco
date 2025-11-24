<script>
	import Table from '../../../components/Table.svelte';
</script>

<svelte:head>
    <title>Agrimatco | Stručni savjeti | Osnovna podjela biljnih hranjiva</title>
</svelte:head>

<section class="section">
    <div class="container">
        <nav><small><a  href="/strucni-savjeti">Stručni savjeti</a> Osnovna podjela biljnih hranjiva</small></nav>
        <h1>Osnovna podjela biljnih hranjiva</h1>

        <figure>
            <figcaption><b>Potrebni (esencijalni, biogeni) elementi:</b></figcaption>
            <ul>
                <li>Makroelementi: C, O, H, N, P, K, S, Ca, Mg</li>
                <li>Mikroelementi: Fe, B, Mn, Zn, Cu, Mo, Cl, Ni</li>
            </ul>
        </figure>
        <figure>
            <figcaption><b>Korisni elementi:</b></figcaption>
            <ul>
                <li>Co, Na, Si, Al, Se, V, Ti, La, Ce</li>
            </ul>
        </figure>
        <figure>
            <figcaption><b>Nekorisni i toksični elementi:</b></figcaption>
            <ul>
                <li>Cr, Cd, U, Hg, Pb, As</li>
            </ul>
        </figure>

        <Table>
            <tr>
                <th>Element</th>
                <th>Simbol</th>
                <th>Raspoloživi oblik</th>
                <th>Kategorija</th>
            </tr>
            <tr>
                <td>Ugljik</td>
                <td>C</td>
                <td>CO<sub>2</sub></td>
                <td rowspan="3">Organski elementi koje biljke usvajaju iz zraka, vode i hranjivih tvari tla</td>
            </tr>
            <tr>
                <td>Vodik</td>
                <td>H</td>
                <td>H<sub>2</sub>O</td>
            </tr>
            <tr>
                <td>Kisik</td>
                <td>O</td>
                <td>O<sub>2</sub></td>
            </tr>
            <tr>
                <td>Dušik</td>
                <td>N</td>
                <td>NO<sub>3</sub><sup>-</sup>, NH<sub>4</sub><sup>+</sup></td>
                <td rowspan="3">Primarni makroelementi potrebni biljkama u većim količinama</td>
            </tr>
            <tr>
                <td>Fosfor</td>
                <td>P</td>
                <td>H<sub>2</sub>PO<sub>4</sub><sup>-</sup>, HPO<sub>4</sub><sup>2-</sup></td>
            </tr>
            <tr>
                <td>Kalij</td>
                <td>K</td>
                <td>K<sup>+</sup></td>
            </tr>
            <tr>
                <td>Kalcij</td>
                <td>Ca</td>
                <td>Ca<sup>2+</sup></td>
                <td rowspan="3">Sekundarni makroelementi potrebni biljkama u manjima količinama</td>
            </tr>
            <tr>
                <td>Magnezij</td>
                <td>Mg</td>
                <td>Mg<sup>2+</sup></td>
            </tr>
            <tr>
                <td>Sumpor</td>
                <td>S</td>
                <td>SO<sub>4</sub><sup>2-</sup>, SO<sub>3</sub><sup>2-</sup></td>
            </tr>
            <tr>
                <td>Bor</td>
                <td>B</td>
                <td>BO<sub>3</sub><sup>3-</sup>, H<sub>3</sub>BO<sub>3</sub></td>
                <td rowspan="8">Mikroelementi potrebni biljkama u malim količinama</td>
            </tr>
            <tr>
                <td>Klor</td>
                <td>CI</td>
                <td>CI</td>
            </tr>
            <tr>
                <td>Bakar</td>
                <td>CU</td>
                <td>CU<sup>2+</sup></td>
            </tr>
            <tr>
                <td>Željezo</td>
                <td>Fe</td>
                <td>Fe<sup>2+</sup>, Fe<sup>3+</sup></td>
            </tr>
            <tr>
                <td>Mangan</td>
                <td>Mn</td>
                <td>Mn<sup>2+</sup></td>
            </tr>
            <tr>
                <td>Molibden</td>
                <td>Mo</td>
                <td>MoO<sub>4</sub><sup>2-</sup></td>
            </tr>
            <tr>
                <td>Cink</td>
                <td>Zn</td>
                <td>Zn<sup>2+</sup></td>
            </tr>
            <tr>
                <td>Nikal</td>
                <td>Ni</td>
                <td>Ni<sup>2+</sup></td>
            </tr>
        </Table>
    </div>
</section>
