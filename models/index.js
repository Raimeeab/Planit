const Band = require('./band');
const Caterer = require('./caterer');
const Venue = require('./venue');
const Event = require('./event');
const Florist = require('./florist');
const User = require('./user')

Band.belongsToMany(User, {
    through: {
        model: Event,
        unique: false
    },
    as: 'booked_bands'
});

Florist.belongsToMany(User, {
    through: {
        model: Event,
        unique: false
    },
    as: 'booked_florists'
});

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