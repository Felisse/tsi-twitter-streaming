// utils/utils.js

var exports = module.exports = {}

exports.random = function() {
  return Math.random();
}

exports.randomInterval = function(min,max) {
  return Math.floor(exports.random()*(max-min+1)+min)
}
