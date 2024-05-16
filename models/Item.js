const {sequelize} = require('../db');
const { Sequelize, Model, DataTypes } = require('sequelize');

class Item extends Model {}

Item.init(
    {
        name: DataTypes.STRING,
        image: DataTypes.STRING,
        price: DataTypes.NUMBER,
        vegetarian: DataTypes.BOOLEAN
    },
    {
        sequelize: sequelize,
        modelName: "Item"
    }
)

module.exports = {Item}