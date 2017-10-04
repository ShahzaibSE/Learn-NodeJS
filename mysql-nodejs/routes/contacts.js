'use strict'

const router = require('express').Router();
const contactController = require('./../controllers/contacts');
const mysql = require('mysql');

// router.post('/add',contactController.add);
router.post('/add',contactController.addV2);

module.exports = router;
