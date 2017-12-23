// import { sequelize_mysql } from '../db.config';

'use strict'

const mysql_access = require('./../db.config').sequelize_mysql();
const sequelize = require('sequelize');
const Sequelize = new sequelize('ToDo','root','',
                                {
                                    host : 'localhost',
                                    dialect : 'mysql'
                                });
const ToDoModel = require('./../models/todo')(Sequelize, sequelize);  // ToDo Model.

exports.create = function(req,res) {
    console.log('Model');
    console.log(model);
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

exports.test = function(req,res) {
    console.log('Dirname');
    console.log(__dirname);
    // let todoModel = model; 
    console.log({
        status: true,
        message : 'Test successfull'
    });
    res.send({
        status: true,
        message : 'Test successfull'
    });
}