'use strict'

const mysql_access = require('./../db.config').sequelize_mysql();
const model = require('./../models/todo');

exports.create = function(req,res) {
    let body = req.body; // params by user.
    let inputObj = {
        name : body.name,
        createdAt: new Date().getDate()
    };
    model.create(inputObj).then( ()=>{
        res.send({
            status: true,
            resCode : 200,
            isError : false,
            message: "Data saved successfully"
        });
    } ).catch((error)=>{
        console.log('Internal server error');
        console.log(error);
        res.send({
            status : false,
            resCode : 500,
            isError : true,
            message : "Internal server error while saving data."
        });
    })
}

exports.update = function(req,res) {

}

exports.selectall = function(req,res) {

}

exports.delete = function(req,res) {

}