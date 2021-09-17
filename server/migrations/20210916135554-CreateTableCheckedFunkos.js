'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('checkedFunkos', {
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
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('checkedFunkos')
  }
};
