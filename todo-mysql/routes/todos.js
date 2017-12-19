'use strict'
const router = require('express').Router();
const todoController = require('./../controllers/todo.controller');

router.get('/todo', todoController.selectall);
router.post('/todo', todoController.create);
router.put('/todo', todoController.update);
router.delete('/todo', todoController.delete);

module.exports = router;