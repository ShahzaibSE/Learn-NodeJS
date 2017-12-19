'use strict'
const Sequelize = require('sequelize');
// MySQL
exports.sequelize_mysql = function() {    
    return new Sequelize('ToDo','root','',{
        host: 'localhost',
        dialect: 'mysql'
    });
}
// PostgreSQL
exports.postgres = function() {    
    return new Sequelize('todo','root','',{
        host: 'localhost',
        dialect : 'postgres'
    });
}