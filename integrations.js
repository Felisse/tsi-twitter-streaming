// integrations.js

var _server = require('./conf/intelligence.js');

// TrueSight Intelligence
require('./integrations/intelligence.js');
console.info('Integration: TrueSight Intelligence found. Using API: ' + _server.tsi_endpoint );
