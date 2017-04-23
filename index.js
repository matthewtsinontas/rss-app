var express = require('express')
var app = express()
var request = require('request');
var xml2js = require('xml2js');

var route = "http://feeds.ign.com/ign/all";

app.set('views', __dirname + '/views')
app.set('view engine', 'jade')

console.log(__dirname  + '/dist');

app.use('/dist', express.static(__dirname  + '/dist'))

app.get('/', function (req, res) {
  res.render('layout');
});

app.get('/feeds', function (req, res) {
  request(route, function(err, reqRes, body) {
    if (err || !reqRes || reqRes.statusCode !== 200) {
      console.error("Error for some reason...");
    }
    var parser = new xml2js.Parser();
    parser.parseString(body, function(err, result) {
      res.send(result);
    });
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
