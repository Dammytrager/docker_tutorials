const { Sequelize, DataTypes } = require('sequelize');
const db = require('../db'); // Uses sequelize

const Todo = db.define('User', {
  // Model attributes are defined here
  item: {
    type: DataTypes.STRING,
    allowNull: false
  },
  status: {
    type: DataTypes.STRING
  }
}, {
  tableName: 'todos'
});

module.exports = Todo;
