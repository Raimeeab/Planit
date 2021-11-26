const router = require('express').Router();
const { Venue, Vendor, User } = require('../models');


router.get('/vendors', async (req, res) => {
    try {
        const vendorData = await Vendor.findAll({
            include: [
                {
                    model: Vendor,
                    attributes: ['']
                }
            ]
        })
    } catch {

    }
})