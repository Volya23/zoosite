'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate({Order}) {
      Product.belongsTo(Order, {
        foreignKey: 'productId'
      });
    }
  }
  Product.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    path: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    rating: {
      type: DataTypes.FLOAT
    },
    category: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Product',
    tableName: 'products',
    underscored: true
  });
  return Product;
};