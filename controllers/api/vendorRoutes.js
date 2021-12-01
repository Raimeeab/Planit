const router = require('express').Router();
const Vendor = require('../../models/vendor');

// router.get('/', async (req, res) => {
//     try {
//         const budget = req.query.budget;

//         const vendorData = await Vendor.findAll();

//         const vendors = vendorData.map((vendor) => vendor.get({ plain: true })); 

//         res.render('all', { vendors }); 

//     } catch (err) {
//         console.log(err);
//         res.status(500).json(err);
//     };
// });

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

module.exports = router;