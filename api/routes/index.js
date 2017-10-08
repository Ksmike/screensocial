const ses = require('node-ses');
module.exports = (app, db) => {
	app.post('/api/contact', (req, res) => {
		const info = {
			name: req.body.name,
			email: req.body.email,
			message: req.body.message
		};

		db.collection('contact').insert(info, (err, r) => {
			if (err || ! r) {
				res.status(403).json({
					err
				});
			}else {
				client.sendemail({
				    to: 'michael.copeland@freakout.tech',
				    from: 'michael.copeland@kout.io',
				    subject: 'Message Requires Response',
				    message: '<div>' + info.message + '</div>'
				}, function (err, data, result) {
					console.log('err, data, result: ', err, data, result);
				    if (err) {
				        res.status(200).json({err});
				    } else {
						res.status(200).json({info});
				    }
				});
				res.status(200).json({r, info});
			}
		});

	});
};