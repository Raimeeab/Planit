const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// create our Bandmodel
class Event extends Model {}

// create fields/columns for Band model
Event.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    event_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    eventtype: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    event_description: {
        type: DataTypes.STRING,
        allowNull: false
      },
    budget: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
    },
    attendees: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    band_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "band",
        key: "id",
        unique: false,
      },
    },
    venue_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "venue",
        key: "id",
        unique: false,
      },
    },
    caterer_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "caterer",
        key: "id",
        unique: false,
      },
    },
    florist_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "florist",
        key: "id",
        unique: false,
      },
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id',
        },
      },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "event",
  }
);

module.exports = Event;
