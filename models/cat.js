var mongoose = require('mongoose');
mongoose.connect(process.env.MONGOLAB_URI || 'localhost');
var db = mongoose.connection;

var userSchema = mongoose.Schema({
	age: Number,
	color: Array,
	name: String
});

var Cat = mongoose.model('Cat', userSchema);

module.exports = Cat;