var helpers = require('../helpers');
var getXmlFromRoute = helpers.getXmlFromRoute;
var parseXml = helpers.parseXml;

/**
  Controller method for getting multiple feeds using a Promise.all to wait
    for all the promises to resolve after building an array of promises from the
    array of sources
*/
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
