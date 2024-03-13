'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING
      },
      path: {
        allowNull: false,
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      price: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      rating: {
        type: Sequelize.FLOAT
      },
      category: {
        type: Sequelize.STRING
      },
      
      createdAt: {
        field: 'created_at',
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        field: 'updated_at',
        allowNull: false,
        type: Sequelize.DATE
      },
      });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable("products");
    },
};