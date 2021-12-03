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

router.post('/create', withAuth, async(req, res) => {
    const userData = await User.findByPk(req.session.user_id)
    const user = userData.get({ plain: true });
    console.log(user)
    let mailOptions = {
      from: 'adrian@vitae.video',
      to: user.email,
      subject: 'Best Email Ever',
      text: 'Your next event has been BOOOKED!! you rock.'
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