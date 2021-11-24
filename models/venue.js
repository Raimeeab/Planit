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
    venue_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    venue_phoneNumber: {
      type: DataTypes.INTEGER,
      allowNull:false,
    },
    venue_price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true
    },
    venue_season: {
      type: DataTypes.STRING,
      allowNull: false
    },
    venue_email: {
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
    modelName: 'venue'
  }
);

module.exports = Venue;