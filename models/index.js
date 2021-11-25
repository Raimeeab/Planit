const Vendor = require('./vendor');
const Event = require('./event');
const User = require('./user');
const Options = require('./options')
const Venue = require('./venue')


User.belongsto(Event, {
    foreignKey: 'user_id'
});


User.hasMany(Event, {
    foreignKey: 'user_id'
});

Venue.hasMany(Event, {
    foreignKey: 'venue_id'
});

Vendor.belongstoMany(Event, {
    through: {
        model: Options,
        unique: false
    },
    as: 'suitable_vendors'
});


Event.belongstoMany(Vendor, {
    through: {
        model: Options,
        unique: false
    },
    as: 'booked_events'
});

   
module.exports = { User, Vendor, Event, Options };