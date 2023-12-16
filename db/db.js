const Sequelize = require('sequelize');

const db = new Sequelize(
    'daurdb',
    'daurin',
    '',
    {
        host: '34.101.106.246',
        dialect: 'mysql',
    }
)

module.exports = db;
