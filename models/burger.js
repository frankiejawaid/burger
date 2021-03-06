var orm = require('../config/orm.js');

var burger = {
    //getting all burgers from the tble
	all: function(cb) {
		orm.all('burgers', function(res){
			cb(res);
		});
	},
    //populating burger
	create: function(cols, vals, cb) {
		orm.create('burgers', cols, vals, function(res){
			cb(res);
		});
	},
    //updating qty for all devoured
	update: function(objColVals, condition, cb) {
		orm.update('burgers', objColVals, condition, function(res){
			cb(res);
		});
	}
};

module.exports = burger;