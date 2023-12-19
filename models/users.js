const { DataTypes } = require('sequelize');
const db = require('../db/db');

const User = db.define('user', {
    id_user: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nama: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING,
    },
    point: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    image_url: {
        type: DataTypes.STRING,
    },
});

User.sync().then(() => {
    console.log('table created');
});

module.exports = User;
