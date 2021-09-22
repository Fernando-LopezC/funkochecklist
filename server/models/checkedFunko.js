const { DataTypes } = require('sequelize');

module.exports = (sequelize) => sequelize.define('checkedFunkos', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      funkoId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'funkos',
          key: 'id'
        },
        onDelete: 'CASCADE' 
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
});