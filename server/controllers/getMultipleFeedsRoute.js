var helpers = require('../helpers');
var getXmlFromRoute = helpers.getXmlFromRoute;
var parseXml = helpers.parseXml;

module.exports = (req, res) => {
  var sources = req.body.sources;
  var allSourcePromises = sources.map(source => {
    return getXmlFromRoute(source).then(xml => {
      return parseXml(xml);
    });
  });
  Promise.all(allSourcePromises).then(xmlRes => {
    res.json(xmlRes);
  }).catch(err => {
    res.status(500).end();
  });
}
