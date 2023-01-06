const { DataTypes } = require("sequelize")
const connection = require("../database/index")

const Games = connection.define("games", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: false
    }, 
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    }, 
    createdAt: {
        type: DataTypes.JSON
    }, 
    updatedAt: {
        type: DataTypes.JSON
    }
})

Games.sync()

module.exports = Games

