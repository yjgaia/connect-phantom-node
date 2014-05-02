exports.connect = function(ports, callback) {

	var
	// http
	http = require('http'),

	// send.
	send = function(callback) {

		http.get("http://localhost:" + ports.phantom, function(res) {
			res.on("data", function(content) {
				callback(JSON.parse(content));
			});
		}).on('error', function() {
			// ignore.
		});
	};

	http.createServer(function(req, res) {
		res.end('{"msg":"ok!"}');
	}).listen(ports.node);

	send(function(data) {
		console.log(data);
	});

	console.log('connect-phantom-node\'s node.js server running.');
};
