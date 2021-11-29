const router = require('express').Router();
const Event = require('../../models/event');


router.delete('/:id', async(req, res) => {
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