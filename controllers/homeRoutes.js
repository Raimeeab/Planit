const router = require('express').Router();
const { Venue, Vendor, User, Event } = require('../models');
const withAuth = require('../utils/withAuth');

router.get('/', async (req, res) => {
    try {
        res.render('homepage');

    } catch (err) {
        res.status(500).json({
            message: "Error occurred:",
            err
        });
        console.log(err);
    };
});


router.get('/profile', withAuth, async (req, res) => {
    try {
      // Find the logged in user based on the session ID
      const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        include: [{ model: Event }],
      });
  
      const user = userData.get({ plain: true });
  
      res.render('profile', {
        ...user,
        logged_in: true
      });

    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});
  
router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/profile');
      return;
      
    };
  
    res.render('login');
});


router.get('/vendors', async (req, res) => {
  try {
    const budget = req.query.budget;

    const vendorData = await Vendor.findAll();

    const vendors = vendorData.map((vendor) => vendor.get({ plain: true })); 

    res.render('vendors', { vendors }); 
  } catch {
    console.log(err);
      res.status(500).json(err);
  };
});


router.get('/venues', async (req, res) => {
  try {
    const budget = req.query.budget;

    const venueData = await Venue.findAll();

    // We use map() to iterate over venueData and then add .get({ plain: true }) each object to serialize it. 
    const venues = venueData.map((venues) => venues.get({ plain: true })); 

    res.render('venues', { venues }); 
  } catch {
    console.log(err);
      res.status(500).json(err);
  };
});

router.get('/:id', async (req, res) => {
  try {
      const venueData = await Venue.findByPk({
          where: req.params.id
      });

      // res.status(200).json(venueData);
      res.render('venues', { venues})
  } catch (err) {
      console.log(err);
      res.status(500).json(err);
  };
});





module.exports = router;

