
const {sequelize} = require("../config/db.js")

const {DataTypes} = require("sequelize")


const Users = sequelize.define("users",{

    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING
    },
    email:{
        type:DataTypes.STRING
    },
    city:{
        type:DataTypes.STRING
    },
    state:{
        type:DataTypes.STRING
    },
    nat:{
        type:DataTypes.STRING
    },
    age:{
        type:DataTypes.INTEGER
    }

})

module.exports = {Users}

