// accessing countries db

var mongoose = require('mongoose');

var countrySchema = mongoose.Schema({
	name: String,
	frenchName: String,
	localName: String,
	region: String,
	hasTraveled: {type: Boolean, Default: false}
});

var Country = mongoose.model('Country',countrySchema);

module.exports = Country;