
/*
 * GET users listing.
 */

 var Cat = require('../models/cat');
 var fs = require('fs');

//listing cats
exports.list = function(req, res) {
	//get the list of cats
	var cats = Cat.find({}, function (err, docs) {
		if (err) throw err;
		res.render('cats', {cats: docs.sort(function(a,b) { return parseFloat(a.age) - parseFloat(b.age) } ), title: 'List of cats'});
	}) ;
};

//making new cats
exports.create = function(req, res) {
	//create a cat
	var colors = ['white', 'black', 'calico', 'tabby', 'purple'];
	var thiscolor = colors[Math.floor(Math.random() * colors.length)];
	var names;
	var thisname;
	fs.readFile('./public/data/names.csv', 'utf8', function (err, data) {
		if (err) throw err;
		names = data.split('\r');
		thisname = names[math.floor(Math.random() * names.length)];
		var newcat = new Cat({ age: Math.floor(Math.random()*20)+1 , color: [thiscolor], name: thisname });
		newcat.save(function (err) {
			if (err) throw err;
		});
	});
	//redir
	res.redirect('/cats');
};

exports.delete = function(req, res) {
	//deletes oldest cat
	var cats = Cat.find({}, function (err, docs) {
		if (err) throw err;
		var oldest = docs[0];
		for (var i in docs) {
			if (docs[i].age > oldest.age) {
				oldest = docs[i];
			}
		}
		Cat.remove(oldest, function(err) {
			if (err) throw err;
		});
	});
	//redir
	res.redirect('/cats');
};

exports.colorlist = function(req, res) {
	var cate = Cat.find({ color: req.params.color.split(':')[1] }, function (err, docs) {
		if (err) throw err;
		res.render('cats', {cats: docs.sort(function(a,b) { return parseFloat(a.age) - parseFloat(b.age) } ), title: 'Cats of a Certain Color'});
	});
}