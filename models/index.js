const User = require('./user');
const Venue = require('./venue');
const Vendor = require('./vendor');
// const Event = require('./event');
// const EventVendors = require('./event-vendors');

// User.belongsTo(Event, {
//     foreignKey: "user_id"
// });

// Vendor.belongsToMany(Event, {
//     through: {
//         model: EventVendors,
//         unique: false    
//     }, 
//     as:"suitable_vendors"
// });

// Event.hasOne(Venue, {
//     foreignKey: 'venue_id'
// });

// Vendor.belongsToMany(Event, {
//     through: {
//         model: EventVendors,
//         unique: false
//     },
//     as: 'suitable_vendors'
// });


// Event.belongsToMany(Vendor, {
//     through: {
//         model: EventVendors,
//         unique: false
//     },
//     as: 'booked_events'
// });

   
module.exports = { User, Venue, Vendor };
// Vendor, Event, EventVendors