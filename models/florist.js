const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Florist extends Model {}

Florist.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
      },
    phoneNumber: {
      type: DataTypes.INTEGER,
      allowNull:false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true
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
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'caterer'
  }
);

module.exports = Florist;