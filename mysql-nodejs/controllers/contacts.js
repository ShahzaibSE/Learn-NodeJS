'use strict'

const mysql = require('mysql');
const mysql_connection = require('./../mysql.config').config.connection;

exports.add = function(req,res) {
    // Opening my sql connection.
    mysql_connection.connect();

    var body = req.body;
    var input = {
        id : 2,
        firstname : body.firstname,
        lastname : body.lastname,
        email : body.email,
        mobile_no : '0999'
    };
    // mysql_connection.connect();
    // mysql_connection.query("INSERT INTO contacts (id,firstname, lastname, email, mobile_no) VALUES (2,'Leon','Kennedy','leon@DSO.com','123')",
    mysql_connection.query("INSERT INTO contacts SET ?", input,
                           function(err, data){
                               if(err) {
                                console.log('Error');   
                                console.log(err);
                                mysql_connection.end();

                                res.send({
                                    status : false,
                                    resCode : 500,
                                    isError : true,
                                    message : 'Internal server error occured'
                                });
                               }else if(data) {
                                   console.log(query.sql);
                                //    res.headers('content-type','application/json');
                                   res.send({
                                       status : true,
                                       resCode : 200,
                                       isError : false,
                                       message : 'Data Inserted successfully',
                                       data : row
                                   });
                               }
                            //    mysql_connection.end(); 
                           });                      
}

exports.addV2 = function(req,res) {
   
        mysql_connection.connect();

        console.log("Connected to Mysql");

        var body = req.body;
        var input = {
            id : 2,
            firstname : body.firstname,
            lastname : body.lastname,
            email : body.email,
            mobile_no : '0999'
        };

        var query = mysql_connection.query('INSERT INTO contacts SET ?', input,
        function(err, result) {
            console.log(result);
        });

        // query = connection.query('INSERT INTO trn_employee SET ?', dinesh,
        // function(err, result) {
        //     console.log(result);
        // });

        mysql_connection.end();
}

exports.selectall = function(req,res) {
    
}
