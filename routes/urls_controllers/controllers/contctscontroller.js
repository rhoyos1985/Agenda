var Contact = require("./../../db_models/model_db").Contact;

(function(ctcctrl){

    ctcctrl.findAllContacts = function (req,res,next)
    {
        Contact.find().then(function(contacts){
            res.status(200).send({message: null, contact: contacts});  
        }).catch(function(err){
            next(err);
        });
    };

    ctcctrl.findByIdContact = function(req,res,next){
        
        Contact.findById(id).then(function(contact){
            res.status(200).send({message: null, contact: contact});
        }).catch(function(err){
            next(err);
        });
    
    };

    ctcctrl.findByOneContact = function(req,res,next){

        Contact.findOne({email: req.body.email}).then(function(contact){
            res.status(200).send({message: null, contact: contact});
        }).catch(function(err){
            next(err);
        });

    };

    ctcctrl.addContact = function(req,res,next){

        var contact = new Contact({
                                name                    : req.body.name,
                                lastname                : req.body.lastname,
                                date_of_birth           : req.body.date_of_birth,
                                sex                     : req.body.sex,
                                email                   : req.body.email,
                                phone                   : req.body.phone,
                                cell_phone              : req.body.cell_phone
                            });

        contact.save()
            .then(function(contact){
                res.status(200).send({message:res.__('successApp.saveOk'), contact:contact});
          }).catch(function(err){
                next(err);
          });
    };

    ctcctrl.updateContact = function(req,res,next){

        Contact.findById(req.body.id).then(function(contact) {
            contact.name                   = req.body.name;
            contact.lastname               = req.body.lastname;
            contact.date_of_birth          = req.body.date_of_birth;
            contact.sex                    = req.body.sex;
            contact.email                  = req.body.email;
            contact.phone                  = req.body.phone;
            contact.cell_phone             = req.body.cell_phone;
            

            contact.save().then(function(contact){
                res.status(200).send({message:res.__('successApp.saveOk'), contact: contact});
            }).catch(function(err){
                next(err);
            });
        }).catch(function(err) {
            next(err);
        });
    };

    ctcctrl.deletContact = function(req,res,next){

        Contact.findById(req.body.id).then(function(contact) {
            console.log(contact);
            contact.remove().then(function(contact){
                res.status(200).send({message: res.__('successApp.saveOk'), contact: null});
            }).catch(function(err){
                next(err);
            });
        }).catch(function(err) {
            next(err);
        });
    };
    
    return ctcctrl;
})(typeof exports === "undefined" ? contactcontroller = {} : exports);