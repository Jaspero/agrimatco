import { Resend } from 'resend';
import { json } from '@sveltejs/kit';
import { RESEND_API_KEY } from '$env/static/private';

export async function POST({ request }) {

  const resend = new Resend(RESEND_API_KEY);

	try {
		const body = await request.json();
		// The Resend SDK reports failures in the result instead of throwing; without this check a failed
		// send was answered with success and the visitor was told the message had been sent.
		const { error } = await resend.emails.send({
			to: 'ivana.ivankovic@agrimatco-eu.com',
			from: 'info@jaspero.co',
			subject: 'Novi kontakt',
			reply_to: body.email,
      html: `
        <p>Ime: ${body.name}</p>
        <p>Email: ${body.email}</p>
        <p>Poruka: ${body.message}</p>
      `
    });
    if (error) return json({ error: error.message || 'send failed' }, { status: 502 });
    return json({ success: true });
  } catch (err) {
    return json({ error: err.toString() }, { status: 500 });
  }
}
