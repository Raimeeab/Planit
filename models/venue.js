const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Bandmodel
class Venue extends Model {}

// create fields/columns for Band model
Venue.init(
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
        type: DataTypes.TEXT,
        allowNull: false
      },
    phoneNumber: {
      type: DataTypes.INTEGER,
      allowNull:false,
    },
    capacity: {
        type: DataTypes.INTEGER,
        allowNull: true,
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
    modelName: 'venue'
  }
);

module.exports = Venue;