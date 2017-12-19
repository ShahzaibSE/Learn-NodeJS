'use strict'
const Sequalize = require('sequelize');
const sequalize = new Sequalize();
const mysql_access = require('./../db.config').sequelize_mysql();

exports.modelInstance = function() {
    return mysql_access.define('todos',{
        name: Sequalize.STRING,
        createdAt: Sequalize.STRING
    })
}