var express = require('express')
var app = express()
var bodyParser = require('body-parser');

// Controllers
var indexRoute = require('./server/controllers/indexRoute');
var getFeedRoute = require('./server/controllers/getFeedRoute');
var getMultipleFeedsRoute = require('./server/controllers/getMultipleFeedsRoute');

// Setting view engines
app.set('views', __dirname + '/views')
app.set('view engine', 'jade')

// Use statements - Setting up static dist directory and adding json middleware
app.use('/dist', express.static(__dirname  + '/dist'))
app.use(bodyParser.json());

// Routing
app.get('/', indexRoute);
app.post('/get-feed', getFeedRoute);
app.post('/get-multiple-feeds', getMultipleFeedsRoute);

// Server listen
app.listen(3000, function () {
  console.log('App listening on :3000');
});
