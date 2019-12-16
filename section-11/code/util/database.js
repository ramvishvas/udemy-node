const Sequelize = require('sequelize');

const sequelize = new Sequelize('udemy_node_two', 'root', '2019@Ubuntu', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;
