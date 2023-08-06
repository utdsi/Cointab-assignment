
const {Sequelize} = require("sequelize")

require('dotenv').config()

const sequelize = new Sequelize("cointab","root",process.env.password,{

    host:"localhost",
    dialect:"mysql"
})


module.exports = {sequelize}


