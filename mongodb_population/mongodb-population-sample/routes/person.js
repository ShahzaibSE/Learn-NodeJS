var express = require('express');
var router = express.Router();
//--Controllers--//
var personController = require("./../controllers/person.controller")

router.get("/allpersons")
router.post("/createperson",personController.add)

module.exports = router