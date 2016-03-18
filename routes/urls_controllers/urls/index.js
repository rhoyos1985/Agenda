var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();


// router.get("/",function(req,res,next)
// {
// 	res.render("index");
// 	next();
// });

router.post("/",function(req,res,next)
{
	console.log("redirect a users")
	res.redirect('/users');
	next();
});


// router.get("/login",function(req,res,next)
// {
// 	res.render("app/login");
// 	next();
// });

// router.get("/signup",function(req,res)
// {
// 	res.render("app/signup");		
// });

// router.put('/entries/:id', function (req, res){
// 	console.log(req.body);
// 	regModel.findById(req.params.id, function (err, entry) {
// 		for (key in req.body){
// 			entry[key] = req.body[key];
// 		}
// 		entry.save(function (err) {
// 			if (!err) {
// 				console.log("updated");
// 				res.status(201).send({});
// 			} else {
// 				console.log(err);
// 				res.status(500).send("updated error");
// 			}
// 		});
// 	});
// });

// router.delete('/entries/:id', function (req, res){
// 	console.log('DELETED: ' + req.params.id);
// 	regModel.findById(req.params.id, function (err, entry) {
// 		entry.remove(function (err) {
// 			if (!err) {
// 				console.log("removed");
// 				res.send(201, "Removed: " + req.params.id);
// 			} else {
// 				console.log(err);
// 				res.send(500, "removed error");
// 			}
// 		});
// 	});
// });

// router.get("/sessions/:id", function(req,res)
// {
// 	console.log("Sessions: " + req.params.id);
// 	regModel.findById(req.params.id,function(err,entrie){
// 		console.log("Encontrado: " + entrie._id);
// 		req.session.user_id = entrie._id;
// 		console.log("Sessions: " + req.session.user_id);
// 		res.redirect("/users");
// 	});
	
// });

module.exports = router;
