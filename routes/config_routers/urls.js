var session_middleware = require("./../middleware/session");
var index = require('./../urls_controllers/urls/index');
var users = require('./../urls_controllers/urls/users');
var home = require('./../urls_controllers/urls/home');
var timeout = require('./../urls_controllers/urls/timeout');
var routes = require('./routers');


module.exports = function(app){
	//app.use('/home',session_middleware)
	var urls = [
					['/', users],
					['/home', session_middleware],
					['/home', home],
					['/timeout', timeout]
				]

	routes.useapp(app,urls);

}