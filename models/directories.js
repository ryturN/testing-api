const { DataTypes } = require('sequelize');
const db = require('../db/db');

const Directory = db.define('directory', {
  directory_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },

});

Directory.sync().then(() => {
  console.log('Directory table created');
});

module.exports = Directory;
