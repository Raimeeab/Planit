const sequelize = require('../config/connection');
const { User, Venue, Vendor, EventVendors, Event } = require('../models');
const userData = require('./user.json');
const vendorData = require('./vendor.json');
const venueData = require('./venue.json');
const eventData = require('./event.json');
const eventVendorData = require('./eventVendors.json');

const seedDatabase = async () => {
    try {
        await sequelize.sync({ force: true });

        const users = await User.bulkCreate(userData, {
            individualHooks: true, 
            returning: true
        });

        const venues = await Venue.bulkCreate(venueData, {
            individualHooks: true, 
            returning: true,
        }); 

        const vendors = await Vendor.bulkCreate(vendorData, {
            individualHooks: true,
            returning: true,
        });

        // console.log(vendorData)

        const events = await Event.bulkCreate(eventData, {
            individualHooks: true, 
            returning: true,
        });

        // const eventVendors = await 

        const eventVendors = await EventVendors.bulkCreate(eventVendorData, {
            individualHooks: true, 
            returning: true,
        })
        
    } catch (err) {
        console.log("message", err);
    }

   process.exit(0);
};

seedDatabase();
