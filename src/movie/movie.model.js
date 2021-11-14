const{DataTypes}= require("sequelize");
const sequelize = require("../db/connection");


const Movie = sequelize.define('Movie', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title:{
        type: DataTypes.STRING,
        allowNull: false
    },
    actor:{
        type: DataTypes.STRING,
        
    },
    actor_id:{
        type: DataTypes.INTEGER,
        
    }
});





module.exports = Movie;
