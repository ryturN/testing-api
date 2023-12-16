const Sequelize = require('sequelize');

const db = new Sequelize(
    'daurdb',
    'root',
    '',
    {
        host: 34.101.188.61,
        dialect: 'mysql',
    }
)

module.exports = db;
