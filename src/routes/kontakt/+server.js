import { Resend } from 'resend';
import { json } from '@sveltejs/kit';
import { RESEND_API_KEY } from '$env/static/private';

export async function POST({ request }) {

  const resend = new Resend(RESEND_API_KEY);

	try {
		const body = await request.json();
		await resend.emails.send({
			// to: 'ivana.ivankovic@agrimatco-eu.com',
			to: 'info@jaspero.co',
			from: 'info@jaspero.co',
			subject: 'Novi kontakt',
			reply_to: body.email,
      html: `
        <p>Ime: ${body.name}</p>
        <p>Email: ${body.email}</p>
        <p>Poruka: ${body.message}</p>
      `
    });
    return json({ success: true });
  } catch (err) {
    return json({ error: err.toString() }, { status: 500 });
  }
}
