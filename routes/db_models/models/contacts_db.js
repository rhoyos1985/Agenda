var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var constants = require('./../../../global/constants/message');

var posibles_valores = ["M","F"];
var email_match = [/^\w+([\.-]?w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, constants.MSJERRUSERDB.MSJERR_EMAIL.MSJ];
var phone_match = [/^\+?\d{1,3}?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/, constants.MSJERRCTCDB.MSJERRPHONE.MSJ]

var contact_schema = new Schema({
	name			: {type: String, required: constants.MSJERRUSERDB.MSJREQUIRED.MSJERREMAILREQ.MSJ},
	lastname		: {type: String, required: constants.MSJERRUSERDB.MSJREQUIRED.MSJERREMAILREQ.MSJ},
	date_of_birth	: Date,
	age				: {type:Number, min:[5, constants.MSJERRUSERDB.MSJERRAGEMIN.MSJ %(5)],max:[100, constants.MSJERRUSERDB.MSJERRAGEMAX.MSJ %(100)]},
	sex				: {type:String, enum:{values: posibles_valores, message: constants.MSJERRUSERDB.MSJERROPTINV.MSJ}},
	email 			: {type:String, required:constants.MSJERRUSERDB.MSJREQUIRED.MSJERREMAILREQ.MSJ, match: email_match},
	phone 			: {type:String, match: phone_match},
	cell_phone		: {type:String, match: phone_match},
});

module.exports = contact_schema;

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