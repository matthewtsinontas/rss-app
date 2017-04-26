var helpers = require('../helpers');
var getXmlFromRoute = helpers.getXmlFromRoute;
var parseXml = helpers.parseXml;

module.exports = (req, res) => {
  var sources = req.body.sources;
  var allSourcePromises = sources.map(sourceObj => {
    return getXmlFromRoute(sourceObj.source).then(xml => {
      return parseXml(xml);
    });
  });
  Promise.all(allSourcePromises).then(xmlResponses => {
    res.json(xmlResponses.map((rss, i) => {
      return {name: sources[i].name, rss};
    }));
  }).catch(err => {
    res.status(500).end();
  });
}
