<svelte:head>
    <title>Agrimatco | Kontakt</title>
</svelte:head>

<script>
    import Field from '../components/Field.svelte';
    import Button from '../components/Button.svelte';

    let name = '';
    let email = '';
    let message = '';

    function handleSubmit() {
        fetch(`/kontakt.json`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify({name, email, message})
        })
            .then(() => {})
            .catch(error => {})
    }
</script>

<section class="section">
    <div class="container">
        <h1>Kontakt</h1>
        <p>Od 1998. godine do danas poslujemo na lokaciji A. Gottlieba 3 u Zagrebu, gdje se nalazi skladište sjemena povrća i administrativni ured. 2009. godine smo kupili skladište u Slavoniji na adresi Jelengradska 12, u Petrijevcima, kako bismo se što više približili našim kupcima. Ovdje  je danas sjedište tvrtke i centralno skladište sredstava za zaštitu bilja i gnojiva.</p>

        <div class="grid">
            <div class="col-6 col-s-12">
                <h2>Sjedište tvrtke</h2>
                <p><img src="kontakt/petrijevci.jpg" alt="Središte firme u Petrijevcima."></p>
                <p>Jelengradska 12, 31208 Petrijevci <br><a href="https://www.google.com/maps?q=Jelengradska+12,+31208+Petrijevci">Pogledaj na karti</a></p>
                <table>
                    <tr>
                        <td>Telefon:</td>
                        <td><a href="tel:031 398 027">031 398 027</a></td>
                    </tr>
                    <tr>
                        <td>Fax:</td>
                        <td><a href="tel:031 398 028">031 398 028</a></td>
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td><a href="mailto:agrimatco.croatia@agrimatco-eu.com">agrimatco.croatia@agrimatco-eu.com</a></td>
                    </tr>
                </table>
            </div>

            <div class="col-6 col-s-12">
                <h2>Ured u Zagrebu</h2>
                <p><img src="kontakt/zagreb.jpg" alt="Ured u Zagrebu."></p>
                <p>Antuna Gottlieba 3, 10090 Zagreb <br><a href="https://www.google.com/maps?q=Antuna+Gottlieba+3,+10090+Zagreb">Pogledaj na karti</a></p>
                <table>
                    <tr>
                        <td>Telefon:</td>
                        <td><a href="tel:01 3461 954">01 3461 954</a></td>
                    </tr>
                    <tr>
                        <td>Fax:</td>
                        <td><a href="tel:01 3453 106">01 3453 106</a></td>
                    </tr>
                </table>
            </div>
        </div>

        <hr>

        <h2>Pošaljite nam poruku</h2>
        <form id="form" on:submit|preventDefault="{handleSubmit}">
            <Field label="Vaše ime">
                <input type="text" size="40" bind:value={name} required>
            </Field>
            <Field label="Vaš email">
                <input type="email" size="40" bind:value={email} required>
            </Field>
            <Field label="Vaša poruka">
                <textarea name="" id="" cols="60" rows="4" bind:value={message} required></textarea>
            </Field>
            <Button type="submit">Pošalji</Button>
        </form>

        <hr>

        <h2>Agrimatco d.o.o.</h2>
        <table>
            <tr>
                <td>MBS:</td>
                <td>080199076</td>
            </tr>
            <tr>
                <td>OIB:</td>
                <td>24373689835</td>
            </tr>
            <tr>
                <td>VAT No.:</td>
                <td>HR24373689835</td>
            </tr>
            <tr>
                <td>Direktor:</td>
                <td>Stjepan Kanižaj</td>
            </tr>
            <tr>
                <td>IBAN:</td>
                <td>HR80 2500 0091 1010 3592 0, Addiko Bank</td>
            </tr>
            <tr>
                <td colspan="2">Upisan u sudski registar u Zagrebu pod br. Tt-98/135-2</td>
            </tr>
            <tr>
                <td colspan="2">Temeljni kapital 14.994.200kn uplaćen u cijelosti.</td>
            </tr>
        </table>
    </div>
</section>
