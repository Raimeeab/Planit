const Vendor = require('./vendor');
const Event = require('./event');
const User = require('./user');
const EventVendors = require('./event-vendors')
const Venue = require('./venue');
const EventVendors = require('./event-vendors');


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
        model: EventVendors,
        unique: false
    },
    as: 'suitable_vendors'
});


Event.belongstoMany(Vendor, {
    through: {
        model: EventVendors,
        unique: false
    },
    as: 'booked_events'
});

   
module.exports = { User, Vendor, Event, EventVendors };