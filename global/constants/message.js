var settings = require('./../settings').LANGUAGE_CODE;
var i18n = require('./../i18n/locales/' + settings);

var message = {
	MESJERR500:{
		NUMBER: 500,
		MESSAG: 'errApp.err500'
	},
	MESJERR404:{
		NUMBER: 404,
		MESSAG: 'errApp.err400'
	},

	MESJERRDB:{
		NUMBER: 0001,
		MESSAG: i18n.errApp.errDB0001
	},

	MESJEXTDB:{
		NUMBER: 0000,
		MESSAG: i18n.successApp.msjConDB
	},

	MSJERRUSERDB:{
		MJSUSERNAMEERRMAX: {
				NUMBER	: 0500,
				MSJ 	: i18n.msjErrGN.msjErrMax,
				FIELD	: i18n.name
			},
		MJSPASSERRMIN	: {
				NUMBER	: 0501,
				MSJ 	: i18n.msjErrGN.msjErrMin,
				FIELD	: i18n.password
			},
		MSJERRUSER_PASS	: {
				NUMBER	: 0502,
				MSJ 	: i18n.msjErrUserDB.msjErrPassw
		},
		MSJERRAGEMIN	: {
				NUMBER	: 0503,
				MSJ 	: i18n.msjErrUserDB.msjErrEdadM
		},
		MSJERRAGEMAX	: {
				NUMBER	: 0504,
				MSJ 	: i18n.msjErrUserDB.msjErrEdadX
		},
		MSJERR_EMAIL	: {
				NUMBER	: 0505,
				MSJ 	: i18n.msjErrUserDB.mjsErrEmail
		},
		MSJERROPTINV	: {
				NUMBER	: 0506,
				MSJ 	: i18n.msjErrGN.msjItemIn
		},
		MSJREQUIRED		: {
				MSJERREMAILREQ: {
					NUMBER	: 0300,
					MSJ 	: i18n.msjErrGN.msjFldReq %(i18n.password)
				}
		}

	},
	MSJERRCTCDB: {
		MSJERRPHONE: {
			NUMBER	: 0100,
			MSJ 	: i18n.msjErrContactDB.msjErrPhone
		}
	}

}

module.exports = message;