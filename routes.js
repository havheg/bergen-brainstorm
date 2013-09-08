var uu = require('underscore'),
	Constants = require('./constants');

var build_errfn = function(errmsg, response) {
    return function errfn(err) {
	console.log(err);
	response.send(errmsg);
    };
};

var indexfn = function(request, response) {
    response.render("homepage", {
	name: Constants.APP_NAME,
	title: Constants.APP_NAME,
	product_name: Constants.PRODUCT_NAME
    });
};

var define_routes = function(dict) {
    var toroute = function(item) {
	return uu.object(uu.zip(['path', 'fn'], [item[0], item[1]]));
    };
    return uu.map(uu.pairs(dict), toroute);
};

var ROUTES = define_routes({
    '/': indexfn
});

module.exports = ROUTES;