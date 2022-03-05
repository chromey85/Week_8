const {DataTypes} = require("sequelize");
const {sequelize} = require("../db/connection");

const Movie = sequelize.define("Movie", {
    movie_id: {
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
        required: true,
        unique: true
    },

    actor: {
        type: DataTypes.STRING,
        defaultValue: "Actor Unknown"
    },
})

module.exports = Movie