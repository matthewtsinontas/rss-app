var helpers = require('../helpers');
var getXmlFromRoute = helpers.getXmlFromRoute;
var parseXml = helpers.parseXml;

module.exports = function (req, res) {
  var sources = req.body.sources;
  var allSourcePromises = sources.map(source => {
    return getXmlFromRoute(source).then(xml => {
      return parseXml(xml);
    });
  });
  Promise.all(allSourcePromises).then(xmlResponses => {
    res.json(xmlResponses);
  }).catch(err => {
    res.status(500).end();
  });
}
