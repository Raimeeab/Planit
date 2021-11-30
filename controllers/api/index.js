const router = require('express').Router();
const userRoutes = require('./userRoutes');
const eventRoutes = require('./eventRoutes');
const vendorRoutes = require('./vendorRoutes');
const venueRoutes = require('./venueRoutes');

router.use('/users', userRoutes);
router.use('/events', eventRoutes);
router.use('/vendors', vendorRoutes);
router.use('/venues', venueRoutes);

module.exports = router;
