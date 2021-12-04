const router = require('express').Router();
const Event = require('../../models/event');
const withAuth = require('../../utils/withAuth');

router.get('/', withAuth, async (req, res) => {
    try {
        const eventData = await Event.findAll();

        const events = eventData.map((events) => events.get({ plain: true })); 

        res.render('all', { events }); 

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/:id', withAuth, async (req, res) => {
    try {
        const vendorData = await Vendor.findAll();
        const eventData = await Event.findByPk(req.params.id);
        const venueData = await Venue.findAll();
          const venues = venueData.map((venue) => venue.get({ plain: true }));
            const event = eventData.get({ plain: true });
        const vendors = vendorData.map((vendor) => vendor.get({ plain: true }));
        res.render('events', { vendors, event, venues,
          logged_in: req.session.logged_in });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    };
});

router.post('/', withAuth, async (req, res) => {
    try {
        const newEvent = await Event.create({
            ...req.body, 
            user_id: req.session.user_id
        });
        console.log(newEvent.dataValues);
        res.status(200).json(newEvent.dataValues);

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    };
});

router.post('/profile', withAuth, async (req, res) => {
    try {
        const newEvent = await Event.create({
            ...req.body, 
            user_id: req.session.user_id
        });
        res.status(200).json(newEvent);
              
          } catch (err) {
              console.log(err);
              res.status(500).json(err);
          };
      });  
      
router.delete('/:id', withAuth, async(req, res) => {
    try {
        const eventData = await Event.destroy({
            where: {
                id: req.params.id
            } 
        });

        res.status(200).json(eventData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;