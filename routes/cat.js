
/*
 * GET users listing.
 */

 var Cat = require('../models/cat');
 var math = require('mathjs')();
 var $ = jQuery = require('jquery');
 //var names = require('./jquery.csv.js');

//listing cats
exports.list = function(req, res){
	//get the list of cats
	var cats = Cat.find({}, function (err, docs) {
		if (err) throw err;
		res.render('cats', {cats: docs, title: 'List of cats'});
	}) ;
};

//making new cats
exports.create = function(req, res){
	//create a cat
	var colors = ['white', 'black', 'calico', 'orange', 'purple'];
	var thiscolor = colors[math.floor(math.random() * colors.length)];
	//var names = 
	//var thisname = names[math.floor(math.random() * names.length)];
	var newcat = new Cat({ age: math.floor(math.random()*20) , color: [thiscolor], name: 'Kitty'});
	newcat.save(function (err) {
		if (err) throw err;
	})
	//redir
	res.redirect('/cats');
}