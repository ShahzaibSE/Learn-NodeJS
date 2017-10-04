'use strict'

const mysql = require('mysql');

exports.config = {
  //My sql configuration.
  connection : mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'firstdb'
  })
};