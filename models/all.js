const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class All extends Model {}

All.init({
    Album: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
    }, 
    Artist: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    Year: {
    type: DataTypes.INTEGER,
    allowNull: false
    }, 
    Rank: {
    type: DataTypes.INTEGER,
    allowNull: false
}
},{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'all',
})

module.exports = All