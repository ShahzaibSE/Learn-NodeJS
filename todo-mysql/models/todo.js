'use strict';
module.exports = (sequelize, DataTypes) => {
  var todo = sequelize.define('todo', {
    name: DataTypes.STRING,
    createdAt: DataTypes.NUMBER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return todo;
};