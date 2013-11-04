var mongoose = require('mongoose');
//what does this line do?
mongoose.connect('localhost');

var userSchema = mongoose.Schema({
	age: Number,
	color: Array,
	name: String
});

var Cat = mongoose.model('Cat', userSchema);

module.exports = Cat;