var User = require("./../../db_models/model_db").User;

(function(userctrl){

    userctrl.findAllUsers = function (req,res,next)
    {
        User.find().then(function(users){
            res.status(200).send(users);  
        }).catch(function(err){
            next(err);
        });
    };

    userctrl.findById = function(id,callback){
        
        User.findById(id).then(function(user){
            callback(user._id);
        }).catch(function(err){
            callback(null);
        });
    
    };

    userctrl.findByOne = function(req,res,next){

        User.findOne({email: req.body.email, password: req.body.pass}).then(function(user){
            res.status(200).send({message: null, user: user});
        }).catch(function(err){
            next(err);
        });

    };

    userctrl.addUser = function(req,res,next){

        var user = new User({
                                name                    : req.body.name,
                                lastname                : req.body.lastname,
                                username                : req.body.username,
                                email                   : req.body.email,
                                sex                     : req.body.sex,
                                date_of_birth           : req.body.date_of_birth,
                                password                : req.body.pass, 
                                password_confirmation   : req.body.pass1
                            });

        user.save()
            .then(function(us){
                res.status(200).send({user:us, message:res.__('successApp.saveOk')});
          }).catch(function(err){
                next(err);
          });
    };

    userctrl.updateUser = function(req,res,next){

        User.findById(req.body.id).then(function(user) {
            user.name                   = req.body.name;
            user.lastname               = req.body.lastname;
            user.username               = req.body.username;
            user.email                  = req.body.email;
            user.sex                    = req.body.sex;
            user.password               = req.body.pass;
            user.password_confirmation  = req.body.pass1;
            

            user.save().then(function(user){
                res.status(200).send({message: null, user: user});
            }).catch(function(err){
                next(err);
            });
        }).catch(function(err) {
            next(err);
        });
    };

    userctrl.deletUser = function(req,res,next){

        User.findById(req.body.id).then(function(user) {
            user.remove().then(function(user){
                res.status(200).send({message: res.__('successApp.saveOk'), user: null});
            }).catch(function(err){
                next(err);
            });
        }).catch(function(err) {
            next(err);
        });
    };
  return userctrl;
})(typeof exports === "undefined" ? usercontroller = {} : exports);