const { Model, DataTypes } = require('sequelize');
const sequelize = require("../config/connection");

class EventVendors extends Model {}

EventVendors.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true, 
            autoIncrement: true
        },
        vendor_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'vendor',
              key: 'id',
            },
        },
        event_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'event',
              key: 'id',
            },
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "event_vendor",
    }
);

module.exports = EventVendors;