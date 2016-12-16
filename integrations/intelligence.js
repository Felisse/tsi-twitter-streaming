// integrations/intelligence.js

var _tsiRequest = require('request')

var exports = module.exports = {}

exports.tsiAPICall = function ( apiContext, postData, callback) {

  var auth = "Basic " + new Buffer(_server.tsi_username + ':' + _server.tsi_token).toString("base64")

  var url  = _server.tsi_endpoint + apiContext

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
