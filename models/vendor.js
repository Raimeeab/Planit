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
        type: DataTypes.STRING,
        allowNull: false
      },
    phoneNumber: {
      type: DataTypes.INTEGER,
      allowNull:false,
    },
    capacity: {
        type: DataTypes.INTEGER,
        allowNull:true,
      },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    season: {
      type: DataTypes.STRING,
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
    modelName: 'venue'
  }
);

module.exports = Vendor;