const Sequelize = require('sequelize');

const connection = new Sequelize('saudefamilia','root','Lucas@36',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;