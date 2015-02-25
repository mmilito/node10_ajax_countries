// SERVER SIDE CODE
var countries = require('../models/countries.json');

var indexController = {
	index: function(req, res) {
		res.render('index');
	},
	countryInfo: function(req,res){
		//console.log(countries);
		res.send({countries:countries});
	},
	countrySearch: function(req,res){
		//res send country where country name = req.name
	}


};

module.exports = indexController;