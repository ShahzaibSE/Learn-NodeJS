'use strict'
const router = require('express').Router();
const todoController = require('./../controllers/todo.controller');
const sequelize = require('sequelize');

// test function.
// function test() {
//     console.log({
//         status: true,
//         message : 'Test successfull'
//     });
//     res.send({
//         status: true,
//         message : 'Test successfull'
//     });
// }

router.get('/todo', todoController.selectall);
router.post('/todo', todoController.create);
router.put('/todo', todoController.update);
router.delete('/todo', todoController.delete);
router.get('/test', todoController.test);

module.exports = router;
