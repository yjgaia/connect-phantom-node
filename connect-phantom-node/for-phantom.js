exports.connect = function(ports, callback) {

	var
	// page
	page = require('webpage').create(),

	// send.
	send = function(callback) {

		page.open('http://localhost:' + ports.node, function(status) {

			var
			// content
			content,

			// data
			data;

			if (status === 'success') {
				content = page.content;
				callback(JSON.parse(content.substring(content.indexOf('{'), content.lastIndexOf('}') + 1)));
			}
		});
	};

	require('webserver').create().listen(ports.phantom, function(req, res) {

		console.log(req);

		res.write('{"msg":"ok!"}');
		res.close();
	});

	send(function(data) {

		console.log(data);
	});

	console.log('connect-phantom-node\'s phantom.js server running.');
};
