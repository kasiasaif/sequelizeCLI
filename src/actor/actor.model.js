const{DataTypes}= require("sequelize");
const sequelize = require("../db/connection");

const Actor = sequelize.define('Actor', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false

    },
    gender: {
        type: DataTypes.STRING,
        defaultValue: 'not specified'
    }
});

module.exports = Actor;
