const{DataTypes}= require("sequelize");
const sequelize = require("../db/connection");
const Actor = require("../actor/actor.model");

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

Movie.hasOne(Actor, {foreignKey: 'actor_id'})
Actor.belongsTo(Movie)

module.exports = Movie;
