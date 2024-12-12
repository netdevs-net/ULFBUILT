module.exports = ({ env }) => ({
	email: {
		config: {
			provider: 'nodemailer',
			providerOptions: {
				host: 'smtp.gmail.com',
				port: 465,
				secure: true,
				auth: {
					user: 'contact@ulfbuilt.com',
					pass: 'kygbixwlotltecql',
				},
				// ... any custom nodemailer options
			},
			settings: {
				defaultFrom: 'contact@ulfbuilt.com',
				defaultReplyTo: 'contact@ulfbuilt.com',
			},
		},
	},
});
