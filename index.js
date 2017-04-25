var express = require('express')
var app = express()
var request = require('request');
var xml2js = require('xml2js');
var bodyParser = require('body-parser');

// Setting view engines
app.set('views', __dirname + '/views')
app.set('view engine', 'jade')

// Use statements - Setting up static dist directory and adding json middleware
app.use('/dist', express.static(__dirname  + '/dist'))
app.use(bodyParser.json());

// Routing
app.get('/', function (req, res) {
  res.render('layout');
});

app.post('/get-feed', function (req, res) {
  var route = req.body.source;
  request(route, function(err, reqRes, body) {
    if (err || !reqRes || reqRes.statusCode !== 200) {
      //TODO: better error handling here... need to document all
      // possible use cases I think
      res.status(500).end();
      return;
    }
    var parser = new xml2js.Parser();
    parser.parseString(body, function(err, result) {
      res.json(result);
    });
  });
});

app.listen(3000, function () {
  console.log('App listening on :3000');
});
