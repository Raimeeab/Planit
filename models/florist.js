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
    florist_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    florist_phoneNumber: {
      type: DataTypes.INTEGER,
      allowNull:false,
    },
    florist_price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true
    },
    florist_email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    }
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