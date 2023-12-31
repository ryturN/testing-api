const { DataTypes} = require('sequelize');
const db = require('../db/db');

const Shop = db.define('shop', {
  shop_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  id_user: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  id_reward: {
  type: DataTypes.INTEGER,
  allowNull: false,
  },

  jumlahProduct: {
    type: DataTypes.INTEGER, 
  },

  status: {
    type: DataTypes.STRING, 
  },


});


Shop.sync().then(() => {
  console.log('Shop table created');
});

module.exports = Shop;
