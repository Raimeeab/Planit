const router = require('express').Router();
const Venue = require('../../models/venue');

router.get('/', async (req, res) => {
    try {
        const budget = req.query.budget;

        const venueData = await Venue.findAll();

        // We use map() to iterate over venueData and then add .get({ plain: true }) each object to serialize it. 
        const venues = venueData.map((venues) => venues.get({ plain: true })); 

        res.render('venues', { venues }); 

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    };
});

router.get('/:id', async (req, res) => {
    try {
        const venueData = await Venue.findByPk({
            where: req.params.id
        });

        res.status(200).json(venueData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    };
});

module.exports = router;