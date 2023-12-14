const Sequelize = require('sequelize');

const db = new Sequelize(
    'daurdb',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mysql',
    }
)

module.exports = db;