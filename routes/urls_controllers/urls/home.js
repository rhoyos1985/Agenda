var express = require('express');
var router = express.Router();
var ctcCtrl	= require('./../controllers/contctscontroller');

router.get("/all",ctcCtrl.findAllContacts);
router.post("/add",ctcCtrl.addContact);
router.put("/upd",ctcCtrl.updateContact);
router.delete("/del",ctcCtrl.deletContact);
router.post("/schone",ctcCtrl.findByOneContact);
router.post("/schid",ctcCtrl.findByIdContact);

module.exports = router;