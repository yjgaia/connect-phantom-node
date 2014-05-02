var
// system
system;

try {
	system = require('system');
} catch(e) {
	// ignore.
}

// if phantom.js
if (system !== undefined && system.platform === 'phantomjs') {
	module.exports = require('./connect-phantom-node/for-phantom.js');
}

// if node.js
else if (global.process !== undefined && process.versions !== undefined && process.versions.node !== undefined) {
	module.exports = require('./connect-phantom-node/for-node.js');
}
