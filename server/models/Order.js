'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate({Customer, Product}) {
      Order.belongsTo(Customer, {
        foreignKey: 'customerId'
      });
      Order.hasMany(Product, {
        foreignKey: 'productId'
      });
    }
  }
  Order.init({
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM('new', 'processing', 'finish', 'expired', 'refuse'),
      allowNull: false,
      defaultValue: 'new'
    }
  }, {
    sequelize,
    modelName: 'Order',
    tableName: 'orders',
    underscored: true
  });
  return Order;
};