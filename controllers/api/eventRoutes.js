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
        const eventData = await Event.findByPk(req.params.id);

        res.status(200).json(eventData);
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

router.post('/api/create', withAuth, async(req, res) => {
    const userData = await User.findByPk(req.session.user_id)
    const user = userData.get({ plain: true });
    const EventData = req.body
    // console.log(EventData)
    console.log(user)
    let mailOptions = {
      from: 'adrian@vitae.video',
      to: user.email,
      subject: 'New Event Created',
      text: `Hey there ${user.name}, it’s our first message sent with Nodemailer`,
      html: `<b><h4>Hey there ${user.name}!<h4> </b><br> Your event details are as follows:<br><br>  Name:${EventData.name}  <br>  Type:${EventData.type} <br>  Budget:${EventData.budget} <br>  Date:${EventData.date} <br>  Attendees:${EventData.attendees} <br><br> Make sure to add it to your calendar!!`,
      
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
    
// ADRIAN"S NEW PUT CODE


router.put('/:id', withAuth, async(req, res) => {
    try {
        const eventData = await Event.update({ venue_id: req.body.venue_id }, { where: {id: venue.id} });
        res.status(200).json(eventData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
  });
//-----------------------------------------------------------

module.exports = router;