const { DataTypes} = require('sequelize');
const db = require('../db/db');

const History  = db.define('histories', {
  History_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  shop_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  user_id: {
  type: DataTypes.INTEGER,
  allowNull: false,
  },

  price: {
    type: DataTypes.INTEGER, 
  },

  status: {
    type: DataTypes.STRING, 
  },


});


History.sync().then(() => {
  console.log('History  table created');
});

module.exports = History ;
