const {DataTypes} = require("sequelize");
const {sequelize} = require("../db/connection");

const Movie = sequelize.define("Movie", {
    id: {

    },

    title: {
        type: DataTypes.STRING,
        allowNull:false,
        unique: true
    },
    
    actor: {
        type: DataTypes.STRING,
        defaultValue: "Actor Unknown"
    },
})

module.exports = Movie