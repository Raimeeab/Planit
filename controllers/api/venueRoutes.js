const router = require('express').Router();
const Venue = require('../../models/venue');
const Event = require('../../models/event');
const withAuth = require('../../utils/withAuth')
const { Op } = require('sequelize');


router.post('/', async (req, res) => {
    try {

        const newVenue = await Venue.create(req.body);

        if(!req.body.name) {
            return res.status(400).json({ message: "Entry is null" });
          } else {
            res.status(200).json(newVenue);
          };

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.put('/:id', async (req, res) => {
    // UPDATE a venue by its `id` value
    try {
      
      const updateVenue = await Venue.update(
        req.body, {
          where: {
            id: req.params.id
          }
        });
  
      if(!req.body.name) {
        return res.status(400).json({ message: "Update unsuccessful, invalid value provided" });
  
      } else if(!updateVenue[0]){ 
        return res.status(404).json({ message: "Venue does not exist, check ID entry." }); 
  
      } else {
        res.status(200).json({
          message: "Sucessfully updated venue details",
          updateVenue
        });
      };
      
    } catch (err) {
      res.status(500).json(err);
     };
});

// Query to display venues based on capacity
router.get('/capacity/:capacity', async (req, res) => {
  try {
    console.log("testing")
    const capacity = req.params.capacity;
  
    const venueCapacity = await Venue.findAll({
      where: {
        capacity: {
          [Op.lte]: capacity
        }
      }
    });
  
    res.status(200).json(venueCapacity);
    
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "an error occurred",
      err
    });
  }
});

// Query to display venues based on budget
router.get('/budget/:budget', async (req, res) => {
  try {
    const budget = req.params.budget;
  
    const venueChoices = await Venue.findAll({
      where: {
        price: {
          [Op.lte]: budget
        }
      }
    });

    res.status(200).json(venueChoices);

  } catch (err) {
    console.log(err);
    res.status(500).json(err)
  }
});

router.put('/event/:id', withAuth, async (req,res) => {
  try { 
    const addVenue = await Event.update(req.body, {
      where: {
          id: req.params.id
      }
  })
  res.status(200).json(addVenue);
} catch (err) {
  console.log(err);
  res.status(500).json(err);
}
});






module.exports = router;
