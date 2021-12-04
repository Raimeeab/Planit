const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Bandmodel
class Vendor extends Model {}

// create fields/columns for Band model
Vendor.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
      },
    number: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      },
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'user',
          key: 'id',
        },
      },
    event_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "event",
          key: "id",
          unique: false,
        },
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'vendor'
  }
);

module.exports = Vendor;