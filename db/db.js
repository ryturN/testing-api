const Sequelize = require('sequelize');

const db = new Sequelize(
    'daurdb',
    'daurin',
    'asty',
    {
        host: '35.188.23.160',
        dialect: 'mysql',
        
    }
)

module.exports = db;
