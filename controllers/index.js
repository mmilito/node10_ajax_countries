// SERVER SIDE CODE
var Country= require('../models/countries.js');

var indexController = {
	index: function(req, res) {
		res.render('index');
	},
	countryInfo: function(req,res){
		//console.log(countries);
		Country.find({},function(err,results){
			//console.log('success');
			res.send(results);
		});
	},
	countrySearchRedir: function(req,res){
		//console.log('res redir');
		res.redirect('/index');
	},
	countrySearch: function(req,res){
		//res send country where country name = req.name
		Country.find({name:req.body.name},function(err,results){
			//console.log(req.body.name);
			res.send(results);
		});
	},
	beenHere: function(req,res){
		//console.log(req.params.countryId);
		Country.findByIdAndUpdate(req.params.countryId,{$set:{hasTraveled:true}},function(err,results){
			//console.log(results);
			res.send(results);
		});
	}

};

module.exports = indexController;