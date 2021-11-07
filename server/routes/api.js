const express = require('express')
const eventsController = require('../controllers/eventsController.js');
const router = express.Router()

router.get('/mostArea',
    eventsController.getMostArea,
    (req, res) => {
        res.status(200).json([...res.locals.mostAreaInfo])
    }
);

router.get('/regions',
    eventsController.getRegion,
    (req, res) => res.status(200).json({})
);

router.get('/searchResult',
    eventsController.getSearch,
    (req, res) => {
        res.status(200).json({})
    }
);

module.exports = router;