const router = require('express').Router();
const Venue = require('../../models/venue');

// router.get('/', async (req, res) => {
//     try {
//         const budget = req.query.budget;

//         const venueData = await Venue.findAll();

//         // We use map() to iterate over venueData and then add .get({ plain: true }) each object to serialize it. 
//         const venues = venueData.map((venues) => venues.get({ plain: true })); 

//         res.render('venues', { venues }); 

//     } catch (err) {
//         console.log(err);
//         res.status(500).json(err);
//     };
// });

// router.get('/:id', async (req, res) => {
//     try {
//         const venueData = await Venue.findByPk({
//             where: req.params.id
//         });

//         res.status(200).json(venueData);
//     } catch (err) {
//         console.log(err);
//         res.status(500).json(err);
//     };
// });


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

module.exports = router;