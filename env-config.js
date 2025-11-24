export const ENV_CONFIG = {
	firebase: process.env.FIREBASE_CONFIG ? JSON.parse(process.env.FIREBASE_CONFIG) : {},
	sendGrid: {
		token: process.env.SENDGRID_API_KEY || ''
	},
	email: process.env.EMAIL || 'info@agrimatco.hr'
};
