//SERVER SIDE CODE

var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var indexController = require('./controllers/index.js');

mongoose.connect('mongodb://localhost/countries');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', indexController.index);

app.get('/countreez', indexController.countryInfo);
app.get('/search', indexController.countrySearchRedir);
app.post('/searchClick', indexController.countrySearch);
app.get('/beenHere/:countryId',indexController.beenHere);



var server = app.listen(8053, function() {
	console.log('Express server listening on port ' + server.address().port);
});

