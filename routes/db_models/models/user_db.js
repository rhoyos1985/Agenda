var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var constants = require('./../../../global/constants/message');

  var posibles_valores = ["M","F"];
  var email_match = [/^\w+([\.-]?w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, constants.MSJERRUSERDB.MSJERR_EMAIL.MSJ];
  var password_validation = {
  		validator: function(p){
  			return this.password_confirmation == p;
  		},
  		message: constants.MSJERRUSERDB.MSJERRUSER_PASS.MSJ
  };

var user_schema = new Schema({
	name: {type: String, required: constants.MSJERRUSERDB.MSJREQUIRED.MSJERREMAILREQ.MSJ},
	lastname: {type: String, required: constants.MSJERRUSERDB.MSJREQUIRED.MSJERREMAILREQ.MSJ},
	username: {type:String, required:true, maxlength:[50, constants.MSJERRUSERDB.MJSUSERNAMEERRMAX.MSJ %(constants.MSJERRUSERDB.MJSUSERNAMEERRMAX.FIELD,50)]},
	password: {
		type:String, 
		required:true, 
		minlength:[8,constants.MSJERRUSERDB.MJSPASSERRMIN.MSJ %(constants.MSJERRUSERDB.MJSPASSERRMIN.FIELD,8)],
		validate: password_validation		
	},
	age: {type:Number,min:[5, constants.MSJERRUSERDB.MSJERRAGEMIN.MSJ %(5)],max:[100, constants.MSJERRUSERDB.MSJERRAGEMAX.MSJ %(100)]},
	email: {type:String, required:constants.MSJERRUSERDB.MSJREQUIRED.MSJERREMAILREQ.MSJ, match: email_match},
	date_of_birth: Date,
	sex: {type:String, enum:{values: posibles_valores, message: constants.MSJERRUSERDB.MSJERROPTINV.MSJ}}
});

user_schema.virtual("password_confirmation").get(function(){
	return this.pass;
}).set(function(pass){
	this.pass = pass;
});

//var User  = mongoose.model("User", user_schema);
module.exports = user_schema;

/* Tipos de Datos para guardar en mongo db a traves de monggose
	String
	Number
	Date
	Buffer
	Boolean
	Mixed
	Objectid
	Array
*/