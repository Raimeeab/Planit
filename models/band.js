const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Bandmodel
class Band extends Model {}

// create fields/columns for Band model
Band.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    band_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    band_description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    band_phoneNumber: {
      type: DataTypes.INTEGER,
      allowNull:false,
    },
    band_price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true
    },
    band_season: {
      type: DataTypes.STRING,
      allowNull: false
    },
    band_email: {
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
    modelName: 'band'
  }
);

module.exports = Band;