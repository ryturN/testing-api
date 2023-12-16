const {DataTYpes, DataTypes} = require('sequelize');
const db = require('../db/db');

const Shop = db.define('shop', {
  shop_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  voucher: {
    type: DataTypes.STRING, 
  },

  price: {
    type: DataTypes.INTEGER, 
  },


});

Shop.sync().then(() => {
  console.log('Shop table created');
});

module.exports = Shop;
