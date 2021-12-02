const router = require('express').Router();
const Vendor = require('../../models/vendor');

router.get('/:id', async (req, res) => {
    try {
        const vendorData = await Vendor.findByPk({ 
            where: req.params.id
        });

        res.status(200).json(vendorData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


router.post('/', async (req, res) => {
    try {

        const newVendor = await Vendor.create(req.body);

        if(!req.body.name) {
            return res.status(400).json({ message: "Entry is null" });
          } else {
            res.status(200).json(newVendor);
          };

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    };
});

router.put('/:id', async (req, res) => {
    // UPDATE a vendor by its `id` value
    try {
      
      const updateVendor = await Vendor.update(
        req.body, {
          where: {
            id: req.params.id
          }
      });
  
      if(!req.body.name) {
        return res.status(400).json({ message: "Update unsuccessful, invalid value provided" });
  
      } else if(!updateVendor[0]){ 
        return res.status(404).json({ message: "Vendor does not exist, check ID entry." }); 
  
      } else {
        res.status(200).json({
          message: "Sucessfully updated vendor details",
          updateVendor
        });
      };
      
    } catch (err) {
      res.status(500).json(err);
     };
  });

module.exports = router;