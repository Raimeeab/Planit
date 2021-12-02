const router = require('express').Router();
const Venue = require('../../models/venue');

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