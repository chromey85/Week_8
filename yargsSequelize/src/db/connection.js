require("dotenv").config();
const {Sequelize} = require("sequelize");
const Customer = require("../customer/customerTable");
const Movie = require("../movie/movieTable");
exports.sequelize = new Sequelize(process.env.MYSQL_URI);
movie_id.hasMany(Customer);
Customer.belongsTo(Movie);
