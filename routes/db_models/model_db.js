var mongoose = require("mongoose");
var settings = require('./../../global/settings');
var Schema = mongoose.Schema;
var user_schema = require('./models/user_db');
var contact_schema = require('./models/contacts_db');
require('./bdconecction/conecctionmongodb').Conecction(mongoose);

//mongoose.connect('mongodb://' + settings.DATBASES.MONGODB.URI +'/' + settings.DATBASES.MONGODB.DB);

// var Model = new Schema({
// 	name: String,
// 	surname: String,
// 	age: Number
// });

var User = mongoose.model('User', user_schema);
var Contact = mongoose.model('Contact',contact_schema)
module.exports.User = User;
module.exports.Contact = Contact;