'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date: {
        allowNull: false,
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.ENUM('new', 'processing', 'finish', 'expired', 'refuse'),
        allowNull: false,
        defaultValue: 'new'
      },
      customerId: {
        field: 'customer_id',
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
            model: 'customers',
            key: 'id',
        },
        onUpdate: 'cascade',
        onDelete: 'cascade',
      },
      productId: {
        field: 'product_id',
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
            model: 'products',
            key: 'id',
        },
        onUpdate: 'cascade',
        onDelete: 'cascade',
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
        await queryInterface.dropTable('orders');
    },
};
