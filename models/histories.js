const { DataTypes } = require('sequelize');
const db = require('../db/db');

const History = db.define('history', {
  history_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  shop_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

});

History.sync().then(() => {
  console.log('History table created');
});

module.exports = History;
