var express = require('express');
var router 	= express.Router();
var usrCtrl	= require('./../controllers/userscontroller');

router.post("/login",usrCtrl.findByOne);
router.post("/signup", usrCtrl.addUser);

module.exports = router;
