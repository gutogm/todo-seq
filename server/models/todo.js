'use strict';
module.exports = function(sequelize, DataTypes) {
  var Todo = sequelize.define('Todo', {
    title: {
       type: DataTypes.STRING,
       allowNull: false
    },
  }, {
    classMethods: {
      associate: function(models) {
          Todo.hasMany(models.TodoItem, {
              foreignKey: 'todoId',
              as: 'todoItems',
          });
        // associations can be defined here
      }
    }
  });
  return Todo;
};
