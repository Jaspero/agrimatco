<svelte:head>
    <title>Agrimatco | Kontakt</title>
</svelte:head>

<script>
    import Field from '../components/Field.svelte';
    import Button from '../components/Button.svelte';

    let name = '';
    let email = '';
    let message = '';
    let loading = false;
    let checkbox1 = false;
    let checkbox2 = false;

    async function handleSubmit() {
        loading = true;

        const formEl = document.querySelector('form');

        fetch(`/kontakt.json`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify({name, email, message})
        })
            .then(() => {})
            .catch(error => {
                formEl.reset();
                loading = false;
                alert("Došlo je do greške pri slanju. Molimo pokušajte kasnije.");
            })
            .finally(() => {
                formEl.reset();
                loading = false;
                alert("Vaša poruka je uspješno poslana!");
            })
    }
</script>

<style>
form label {
    display: block;
    margin-bottom: 10px; 
}
</style>

<section class="section">
    <div class="container">
        <h1>Kontakt</h1>
        <p>Tvrtka Agrimatco d.o.o. od 1998. godine  posluje na lokaciji A. Gottlieba 3 u Zagrebu, gdje se i danas nalazi skladište sjemena povrća i administrativni ured. Godine 2009. sjedište firme se prebacuje  u Slavoniju na adresu Jelengradska 12, u Petrijevcima, gdje se nalazi centralno skladište gnojiva, sredstava za zaštitu bilja i sustava za navodnjavanje.</p>

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

            <label>
                <input type="checkbox" bind:checked={checkbox1} required />
                Potvrđujem da sam pročitao i razumio sadržaj
                <a href="https://agrimatco.hr/politika-privatnosti" target="_blank">Pravila privatnosti</a>. 
            </label>

            <label>
                <input type="checkbox" bind:checked={checkbox2} required />
                Podaci koji se unose neće biti korišteni niti u jednu svrhu osim da se vidi tko je poslao poruku.
            </label>

            <Button type="submit" id="contact-page-send" bind:loading={loading} disabled={!name || !email || !message || !checkbox1 || !checkbox2}>Pošalji</Button>
        </form>
    </div>
</section>
