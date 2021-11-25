const Vendor = require('./vendor');
const Event = require('./event');
const User = require('./user')


Venue.belongsToMany(User, {
    through: {
        model: Event,
        unique: false
    },
    as: 'booked_venues'
});

Caterer.belongsToMany(User, {
    through: {
        model: Event,
        unique: false
    },
    as: 'booked_caterers'
});

Event.hasOne(Band, {
    foreignKey: 'event_id',
});

Event.hasOne(Florist, {
    foreignKey: 'event_id',
});

Event.hasOne(Venue, {
    foreignKey: 'event_id',
});

Event.hasOne(Caterer, {
    foreignKey: 'event_id',
});

Event.hasOne(User, {
    foreignKey: 'user_id',
});

module.exports = { User, Band, Event, Caterer, Florist, Venue };