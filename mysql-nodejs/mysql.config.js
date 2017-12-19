'use strict'

const mysql = require('mysql');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('firstdb','root','',{
  host : 'localhost',
  dialect : 'mysql'
});

exports.config = {
  //My sql configuration.
  connection : mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'firstdb'
  })
};

exports.pool  = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'firstdb'
});

exports.sequalize = {
  host: 'localhost',
  dialect: 'mysql'|'sqlite'|'postgres'|'mssql',
  // dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
};