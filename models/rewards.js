const { DataTypes} = require('sequelize');
const db = require('../db/db');

const Reward = db.define('reward', {
  id_reward: {
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

  price: {
    type: DataTypes.INTEGER, 
  },

  stock: {
    type: DataTypes.INTEGER, 
  },





});


Reward.sync().then(() => {
  console.log('Shop table created');
});

module.exports = Reward;
