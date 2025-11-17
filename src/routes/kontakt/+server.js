import * as sgMail from '@sendgrid/mail';
import { json } from '@sveltejs/kit';
import {ENV_CONFIG} from '../../../env-config.js';

export async function POST({ request }) {
  try {
    const body = await request.json();
    sgMail.setApiKey(ENV_CONFIG.sendGrid.token);
    await sgMail.send({
      to: ENV_CONFIG.email,
      from: 'info@jaspero.co',
      subject: 'Novi kontakt',
      replyTo: body.email,
      text: 'Molim vas učitajte ovu poruku sa modernim preglednikom',
      html: `
        <p>Ime: ${body.name}</p>
        <p>Email: ${body.email}</p>
        <p>Poruka: ${body.message}</p>
      `,
    });
    return json({ success: true });
  } catch (err) {
    return json({ error: err.toString() }, { status: 500 });
  }
}
