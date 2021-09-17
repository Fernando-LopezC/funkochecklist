const sequelize = require('sequelize');
const { DataTypes, Sequelize } = require('sequelize');

module.exports = (sequelize) => sequelize.define('checkedFunkos', {
    id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      funkoId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'funkos',
          key: 'id'
        },
        onDelete: 'CASCADE' 
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
}, {
    hooks: {
        beforeCreate: function (checkedFunko, options, fn) {
            checkedFunko.createdAt = new Date();
            checkedFunko.updatedAt = new Date();
            fn(null, funko);
        },
        beforeUpdate: function (checkedFunko, options, fn) {
            checkedFunko.updatedAt = new Date();
            fn(null, checkedFunko);
        }
    }
});