const {DataTypes} = require("sequelize");
const {sequelize} = require("../db/connection");


const Customer = sequelize.define("Customer", {
    userId:{
        type: DataTypes.INTEGER,
        allowNull:false,
        unique: true,
        primaryKey: true 
    },

    title: {
        type: DataTypes.STRING,
        allowNull:false,
        unique: false
    },

    firstName: {
        type: DataTypes.STRING,
        allowNull:false,
        unique: false
    },

    surName: {
        type: DataTypes.STRING,
        allowNull:false,
        unique: false
    },

    id: {
        foreignKey: true,
    }
})

module.exports = Customer