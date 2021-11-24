const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Bandmodel
class Caterer extends Model {}

// create fields/columns for Band model
Caterer.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    caterer_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    caterer_description: {
        type: DataTypes.STRING,
        allowNull: false
      },
    caterer_phoneNumber: {
      type: DataTypes.INTEGER,
      allowNull:false,
    },
    caterer_price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true
    },
    caterer_email: {
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

module.exports = Caterer;