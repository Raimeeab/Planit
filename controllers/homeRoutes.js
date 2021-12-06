const router = require('express').Router();
const nodemailer = require('nodemailer');
const { Venue, Vendor, User, Event } = require('../models');

// Verify user is logged into an account
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

// API CANNOT BE IN HOMEROUTE
router.post('/api/create', withAuth, async(req, res) => {
  const userData = await User.findByPk(req.session.user_id)
  const eventData = Event.findByPk(req.params.id)
  const event = eventData.get({ plain: true });
  const user = userData.get({ plain: true });
  let mailOptions = {
    from: 'adrian@vitae.video',
    to: user.email,
    subject: 'New Event Created',
    text: `Hey there ${user.name}, it’s our first message sent with Nodemailer`,
    html: `<b><h4>Hey there ${user.name}!<h4> </b><br> Your event details are as follows:</b><br>  Name: ${event.name} </b><br>  Type: ${event.type}`,
    
};
  
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'adrian@vitae.video',
      pass: 'NEWPassword!@###'
    }
  });
  
  transporter.sendMail(mailOptions, (error, info) => {
    if(error) {
      console.log(error);
    } else {
      console.log('Email send: ' + info.response)
    }
  })
})    
  
router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/profile');
      return;
      
    };
  
    res.render('login');
});

// GET all vendors
router.get('/vendors', async (req, res) => {
  try {
    const vendorData = await Vendor.findAll();

    const vendors = vendorData.map((vendor) => vendor.get({ plain: true })); 

    res.render('vendors', { vendors }); 
  } catch {
    console.log(err);
      res.status(500).json(err);
  };
});

// GET one vendor
router.get('/vendors/:id', async (req, res) => {
  try {
      const vendorData = await Vendor.findByPk(req.params.id);

      const vendor = vendorData.get({ plain: true });
      res.render('vendors', { vendor });

  } catch (err) {
      console.log(err);
      res.status(500).json(err);
  };
});

// GET all venues
router.get('/venues', async (req, res) => {
  try {

    const venueData = await Venue.findAll();

    // We use map() to iterate over venueData and then add .get({ plain: true }) each object to serialize it. 
    const venues = venueData.map((venues) => venues.get({ plain: true })); 

    res.render('venues', { venues }); 
  } catch {
    console.log(err);
      res.status(500).json(err);
  };
});

// GET one venue
router.get('/venues/:id', async (req, res) => {
  try {
      const venueData = await Venue.findByPk(req.params.id);

      const venue = venueData.get({ plain: true });
      res.render('venues', { venue });

  } catch (err) {
      console.log(err);
      res.status(500).json(err);
  };
});

// GET one event 
router.get('/events/:id', withAuth, async (req, res) => {
  try {
    const eventData = await Event.findByPk(req.params.id);

    const event = eventData.get({ plain: true });
  
    res.render('events', { event });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET suitable vendors by budget 
// router.get('/events/:id/vendors/:budget', withAuth, async (req, res) => {
//   try {
//     const budget = req.params.budget;
  
//     const vendorChoices = await Vendor.findAll({
//       where: {
//         price: {
//           [Op.lte]: budget
//         }
//       }
//     });
  
//     res.render('budget', { vendorChoices });
  
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   };

// });


// router.get('/events/:id/venues', withAuth, venueByCapacity, venuesByBudget, async (req, res) => {
//   try {
//     const budget = req.params.budget;
  
//     const venueChoices = await Venue.findAll({
//       where: {
//         price: {
//           [Op.lte]: budget
//         }
//       }
//     });

//     res.status(200).json(venueChoices);
    

//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   };

// });

// ADRIAN ADDED THIS TO GET THE VENUES/VENDORS TO DISPLAY ON EVENT.HANDLEBARS

// router.get('/events/:id', withAuth, async (req, res) => {
//   try {
//     const vendorData = await Vendor.findAll();
//     const eventData = await Event.findByPk(req.params.id);
//     const venueData = await Venue.findAll();
//       const venues = venueData.map((venue) => venue.get({ plain: true }));
//         const event = eventData.get({ plain: true });
//     const vendors = vendorData.map((vendor) => vendor.get({ plain: true }));
//     res.render('events', { vendors, event, venues,
//       logged_in: req.session.logged_in });

// } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
// };
// });


module.exports = router;

