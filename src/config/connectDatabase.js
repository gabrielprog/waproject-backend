const { Sequelize } = require('sequelize')

const sequelize = new Sequelize({
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: process.env.HOST,
    dialect: process.env.DIALECT
});

module.exports = sequelize