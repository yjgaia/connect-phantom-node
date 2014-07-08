var cpn = require('./connect-phantom-node.js');

cpn.connect({
	node : 8890,
	phantom : 8891
}, function(connection) {

	connection.send('test', {
		msg : 'test'
	});

	connection.on('test', function(data) {
		console.log(data);
	});
});
