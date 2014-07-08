# connect-phantom-node

connect phantom to node, node to phantom.

## phantom side
````js
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
````

## node side
````js
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
````

## License
[The MIT License](http://opensource.org/licenses/MIT)