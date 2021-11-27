const User = require('./user');
const Venue = require('./venue');
const Vendor = require('./vendor');
const Event = require('./event');
const EventVendors = require('./event-vendors');

// User belongs to Event

// User.belongsTo(Event, {
//     foreignKey: "user_id"
// });

// Event has one Venue 
// Event can have many Vendors 
// Vendors can have many Events


// Event.hasOne(Venue, {
//     foreignKey: 'venue_id'
// });

Vendor.belongsToMany(Event, {
    through: {
        model: EventVendors,
        unique: false
    },
    as: 'suitable_vendors'
});
   
module.exports = { User, Venue, Vendor, Event, EventVendors };