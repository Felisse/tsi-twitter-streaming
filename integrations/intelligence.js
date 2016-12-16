// integrations/intelligence.js

// Configuration
var _server = require('../conf/intelligence.js')

var _tsiRequest = require('request')
require('request-debug')(_tsiRequest);

var exports = module.exports = {}

exports.tsiAPICall = function ( apiContext, postData, callback) {

  // URL definition
  var url  = _server.tsi_endpoint + apiContext

  // Postdata management & Option definition
  if (postData) {
    var callOptions = {
      url: url,
      body: JSON.stringify(postData),
      auth: {
        user: _server.tsi_username,
        pass: _server.tsi_token,
        sendImmediately: true
      },
      headers: {
        'Content-Type': 'application/json'
      }
    }
  }
  else {
    var callOptions = {
      url: url,
      auth: {
        user: _server.tsi_username,
        pass: _server.tsi_token,
        sendImmediately: true
      },
      headers: {
        'Content-Type': 'application/json'
      }
    }
  }

  // Debug
  console.log(callOptions)

  // If nothing posted, then we do a GET
  if (!postData) {
    console.log(postData)
    _tsiRequest.get(callOptions, callback)
    return;
  }

  // If not...
  _tsiRequest.post(callOptions, callback);

}
