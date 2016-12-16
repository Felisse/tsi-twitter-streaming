// index.js

// utils
var Utils = require('./utils/utils.js');

// Configuration
var _server = require('./conf/intelligence.js');

// Calling integrations
require('./integrations.js');

// Tests
var request = require('request');

/*
// Context setup
var callOptions = {
  url: _server.tsi_endpoint + "/v1/account/sources",
  auth: {
    user: _server.tsi_username,
    pass: _server.tsi_token,
    sendImmediately: true
  }
}

request.get(callOptions, function (error, response, body) {
    //Check for error
    if(error){
        return console.log('Error:', error);
    }

    //Check for right status code
    if(response.statusCode !== 200){
        return console.log('Invalid Status Code Returned:', response.statusCode);
    }

    //All is good. Print the body
    console.log(body); // Show the HTML for the Modulus homepage.

});
*/

// Using intelligence.js
var tsiCall = require('./integrations/intelligence.js')

/*
// GET
tsiGetSources.tsiAPICall("/v1/metrics", null, function(error, response, body){
  //Check for error
  if(error){
      return console.log('Error:', error);
  }

  //Check for right status code
  if(response.statusCode !== 200){
      return console.log('Invalid Status Code Returned:', response.statusCode);
  }

  //All is good. Print the body
  console.log(body); // Show the HTML for the Modulus homepage.
});
*/

// PUT event
var nb = Utils.randomInterval(0,100)

var event = {
  "title": "New run node.js application => "+nb,
  "fingerprintFields": ["@title", "@message"],
  "message": "New run node.js application => "+nb,
  "severity": "INFO",
  "status": "OPEN",
  "eventClass": "Technical",
  "source": {"ref": "Twitter", "type": "Social Networks"},
  "properties": { "app_id": _server.tsi_appid }
}

tsiCall.tsiAPICall("/v1/events", event, function(error, response, body){
  //Check for error
  if(error){
      return console.log('Error:', error);
  }

  //Check for right status code
  if(response.statusCode !== 200 && response.statusCode !== 202){
      return console.log('Invalid Status Code Returned:', response.statusCode);
  }

  //All is good. Print the body
  console.log(body); // Show the HTML for the Modulus homepage.
});

/*

// PUT measurements
var measures = [
  [
    "Twitter",
    "ORANGE.DERS.TWITTER.GLOBAL",
    Utils.randomInterval(0,100),
    {
      "app_id": _server.tsi_appid
    }
  ]
]

tsiCall.tsiAPICall("/v1/measurements", measures, function(error, response, body){
  //Check for error
  if(error){
      return console.log('Error:', error);
  }

  //Check for right status code
  if(response.statusCode !== 200){
      return console.log('Invalid Status Code Returned:', response.statusCode);
  }

  //All is good. Print the body
  console.log(body); // Show the HTML for the Modulus homepage.
});
*/
