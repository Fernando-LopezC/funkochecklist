const sequelize = require('sequelize');
const {DataTypes} = require('sequelize');

module.exports = (sequelize) => sequelize.define('funkos', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
      name: { type: DataTypes.STRING, allowNull: false },
      number: { type: DataTypes.INTEGER, allowNull: false },
      upc: { type: DataTypes.INTEGER, unique: true, allowNull: false },
      fandom: DataTypes.STRING,
      category: DataTypes.STRING,
      releaseDate: DataTypes.DATE,
      exclusive: { type: DataTypes.BOOLEAN, allowNull: false },
      exclusiveStore: DataTypes.STRING,
      image: { type: DataTypes.STRING, allowNull: false },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
});