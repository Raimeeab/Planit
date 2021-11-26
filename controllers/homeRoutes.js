const router = require('express').Router();
const { Venue, Vendor, User } = require('../models');


router.get('/vendors', async (req, res) => {
    try {
        const vendorData = await Vendor.findAll();
        const vendors = vendorData.map((vendor) => vendor.get({ plain: true }));

        res.render('vendors', {
            vendors,
        });

    } catch (err) {
        res.status(500).json({
            message: "Error occurred:",
            err
        });
    };
})