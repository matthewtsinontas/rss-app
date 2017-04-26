var xml2js = require('xml2js');
var request = require('request');

/**
  Function to parse an xml feed into a JSON object

  @param {String} xml
  @return {Promise}
*/
function parseXml(xml) {
  var parser = new xml2js.Parser();
  return new Promise(function(resolve, reject) {
    parser.parseString(xml, function(err, result) {
      err ? reject(err) : resolve(result);
    });
  });
}

/**
  Function to dispatch a request to fetch some xml from a route

  @param {String} route
  @return {Promise}

  TODO: Better error handling here needed
*/
function getXmlFromRoute(route) {
  return new Promise(function (resolve, reject) {
    request(route, function(err, res, body) {
      (err || !res || res.statusCode !== 200) ? reject(err) : resolve(body);
    });
  });
}

module.exports = {
  parseXml: parseXml,
  getXmlFromRoute: getXmlFromRoute
}
