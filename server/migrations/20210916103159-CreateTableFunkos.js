'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('funkos', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
      name: { type: Sequelize.STRING, allowNull: false },
      number: { type: Sequelize.INTEGER, allowNull: false },
      upc: { type: Sequelize.INTEGER, unique: true, allowNull: false },
      fandom: Sequelize.STRING,
      category: Sequelize.STRING,
      releaseDate: Sequelize.DATEONLY,
      exclusive: { type: Sequelize.BOOLEAN, allowNull: false },
      exclusiveStore: Sequelize.STRING,
      image: { type: Sequelize.STRING, allowNull: false },
      CreatedAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('funkos');
  }
};
