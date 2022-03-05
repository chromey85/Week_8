const {DataTypes} = require("sequelize");
const {sequelize} = require("../db/connection");


const Customer = sequelize.define("Customer", {
    userId:{
        type: DataTypes.INTEGER,
        allowNull:false,
        unique: true,
        autoIncrement: true,
        required: true,
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
        required: true,
        unique: false
    },

    surName: {
        type: DataTypes.STRING,
        allowNull:false,
        required: true,
        unique: false
    },

    dob: {
        type: DataTypes.DATE,
        required: true,
        allowNull: false,
        unique: false
    },

    movie_id: {
        //foreign Key in movieTable.js
        type: DataTypes.INTEGER,
        allowNull:false,
        required: true
    }
})

module.exports = Customer