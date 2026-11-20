<script>
  import { tick } from 'svelte';
  import Field from '../../components/Field.svelte';
  import Button from '../../components/Button.svelte';

  let name = '';
  let email = '';
  let message = '';
  let loading = false;
  let checkbox1 = false;
  let checkbox2 = false;
  /** Result of the last send, shown under the form and announced to screen readers. */
  let status = null;
  let statusEl;

  async function handleSubmit(e) {
    const formEl = e.target;
    loading = true;
    status = null;

    try {
      const res = await fetch(`/kontakt`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify({ name, email, message })
      });
      if (!res.ok) throw new Error(String(res.status));
      formEl.reset();
      name = '';
      email = '';
      message = '';
      checkbox1 = false;
      checkbox2 = false;
      status = { ok: true, text: 'Vaša poruka je uspješno poslana!' };
    } catch (error) {
      status = { ok: false, text: 'Došlo je do greške pri slanju. Molimo pokušajte kasnije.' };
    } finally {
      loading = false;
      await tick();
      statusEl?.focus();
    }
  }
</script>

<svelte:head>
  <title>Agrimatco | Kontakt</title>
</svelte:head>

<section class="section">
  <div class="container">
    <h1>Kontakt</h1>
    <p>
      Tvrtka Agrimatco d.o.o. od 1998. godine posluje na lokaciji A. Gottlieba 3 u Zagrebu, gdje se
      i danas nalazi skladište sjemena povrća i administrativni ured. Godine 2009. sjedište firme se
      prebacuje u Slavoniju na adresu Jelengradska 12, u Petrijevcima, gdje se nalazi centralno
      skladište gnojiva, sredstava za zaštitu bilja i sustava za navodnjavanje.
    </p>

    <div class="grid">
      <div class="col-6 col-s-12">
        <h2>Sjedište tvrtke</h2>
        <p><img src="kontakt/petrijevci.jpg" alt="Središte firme u Petrijevcima." /></p>
        <p>
          Jelengradska 12, 31208 Petrijevci <br /><a
            href="https://www.google.com/maps?q=Jelengradska+12,+31208+Petrijevci"
            >Pogledaj na karti</a
          >
        </p>
        <table>
          <tbody>
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
              <td
                ><a href="mailto:agrimatco.croatia@agrimatco-eu.com"
                  >agrimatco.croatia@agrimatco-eu.com</a
                ></td
              >
            </tr>
          </tbody>
        </table>
      </div>

      <div class="col-6 col-s-12">
        <h2>Ured u Zagrebu</h2>
        <p><img src="kontakt/zagreb.jpg" alt="Ured u Zagrebu." /></p>
        <p>
          Antuna Gottlieba 3, 10090 Zagreb <br /><a
            href="https://www.google.com/maps?q=Antuna+Gottlieba+3,+10090+Zagreb"
            >Pogledaj na karti</a
          >
        </p>
        <table>
          <tbody>
            <tr>
              <td>Telefon:</td>
              <td><a href="tel:01 3461 954">01 3461 954</a></td>
            </tr>
            <tr>
              <td>Fax:</td>
              <td><a href="tel:01 3453 106">01 3453 106</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <hr />

    <h2>Pošaljite nam poruku</h2>
    <p>Sva polja i obje potvrde su obavezni.</p>
    <form id="form" on:submit|preventDefault={handleSubmit}>
      <Field label="Vaše ime">
        <input type="text" size="40" name="name" autocomplete="name" bind:value={name} required />
      </Field>
      <Field label="Vaš email">
        <input type="email" size="40" name="email" autocomplete="email" bind:value={email} required />
      </Field>
      <Field label="Vaša poruka">
        <textarea name="message" cols="60" rows="4" bind:value={message} required></textarea>
      </Field>

      <label>
        <input type="checkbox" bind:checked={checkbox1} required />
        Potvrđujem da sam pročitao i razumio sadržaj
        <a href="/politika-privatnosti" target="_blank">Pravila privatnosti<span class="sr-only"> (otvara se u novoj kartici)</span></a>.
      </label>

      <label>
        <input type="checkbox" bind:checked={checkbox2} required />
        Podaci koji se unose neće biti korišteni niti u jednu svrhu osim da se vidi tko je poslao poruku.
      </label>

      <Button type="submit" id="contact-page-send" bind:loading>Pošalji</Button>
    </form>
    <div role="status">
      {#if status}
        <p class="form-status" class:error={!status.ok} tabindex="-1" bind:this={statusEl}>
          <b>{status.text}</b>
        </p>
      {/if}
    </div>
  </div>
</section>

<style>
  form label {
    display: block;
    margin-bottom: 10px;
  }
  .form-status {
    padding: var(--space-small) var(--space-regular);
    border-left: 4px solid var(--accent);
    background: var(--background-secondary);
  }
  .form-status.error {
    border-left-color: #b00020;
  }
</style>
