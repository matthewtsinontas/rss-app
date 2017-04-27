var helpers = require('../helpers');
var getXmlFromRoute = helpers.getXmlFromRoute;
var parseXml = helpers.parseXml;

/**
  Controller method for getting a single feed

  Gets the xml from the route, then parses it to JSON before returning a response
*/
module.exports = function (req, res) {
  var route = req.body.source;
  getXmlFromRoute(route).then(function (xml) {
    parseXml(xml).then(function (json) {
      res.json(json);
    })
  }).catch(function (err) {
    res.status(500).end();
  });

}
