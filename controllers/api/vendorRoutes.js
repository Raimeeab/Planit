const router = require('express').Router();
const Vendor = require('../../models/vendor');
const { Op } = require('sequelize');

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

router.get('/budget/:budget', async (req, res) => {
  try {
    const budget = req.params.budget;
  
    const vendorChoices = await Vendor.findAll({
      where: {
        price: {
          [Op.lte]: budget
        }
      }
    });
  
    res.status(200).json(vendorChoices);

  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "an error occurred",
      err
    })
  }
});

module.exports = router;