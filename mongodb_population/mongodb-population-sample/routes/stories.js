var express = require('express');
var router = express.Router();
//--Controllers--//
var storiesController = require("./../controllers/stories.controller")

router.get("/searchstory", storiesController.search);
router.get("/getstories", storiesController.selectall);

module.exports = router