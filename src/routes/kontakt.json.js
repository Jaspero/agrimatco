import * as sgMail from '@sendgrid/mail';
import {ENV_CONFIG} from '../../env-config';

export function post(req, res) {
  sgMail.setApiKey(ENV_CONFIG.sendGrid.token);
  sgMail.send({
    to: ENV_CONFIG.email,
    from: 'info@jaspero.co',
    subject: 'Novi kontakt',
    replyTo: req.body.email,
    text: 'Molim vas učitajte ovu poruku sa modernim preglednikom',
    html: `
        <p>Ime: ${req.body.name}</p>
        <p>Email: ${req.body.email}</p>
        <p>Poruka: ${req.body.message}</p>
    `,
  })
    .then(() => {
      res.writeHead(200, {
        'Content-Type': 'application/json'
      });
      res.end(JSON.stringify({success: true}))
    })
    .catch((err) => {
      res.writeHead(500, {
        'Content-Type': 'application/json'
      });
      res.end(JSON.stringify({error: err.toString()}))
    });
}
