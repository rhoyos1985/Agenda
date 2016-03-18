var routers = {};

routers.useapp =  function(app,urls){

	for (var i=0 ; i < urls.length ; i++){
		var item = urls[i];
		app.use(item[0],item[1]);
	}

};

module.exports = routers;