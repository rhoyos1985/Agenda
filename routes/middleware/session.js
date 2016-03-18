var usrCtrl	= require('./../urls_controllers/controllers/userscontroller');

module.exports = function(req,res,next){
	
	sess = req.session;
	var accessToken = req.get('AccessToken') || null;

	usrCtrl.findById(accessToken, function(id){
		sess.user_id = id;
		
		//Session set when user Request our app via URL
		if(!sess.user_id) {
		    res.status(200).send({message: "Debe Iniciar sesión antes de continuar"});
		}
		else{
			next();
		}
	});
	
}