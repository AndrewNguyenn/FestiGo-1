const express = require('express')
const eventsController = require('../controllers/eventsController.js');
const router = express.Router()

router.get('/', (req, res) => {
    res.status(200);
})

router.get('/mostArea',
    eventsController.getMostArea,
    (req, res) => {
        res.status(200).json([...res.locals.mostAreaInfo])
    }
);

router.get('/country',
    eventsController.getCountries,
    (req, res) => {
        res.status(200).json(res.locals.countries)
    }
);

router.get('/state',
    eventsController.getStates,
    (req, res) => res.status(200).json(res.locals.states)
);

router.get('/searchResult',
    eventsController.getSearch,
    (req, res) => {
        res.status(200).json({})
    }
);

module.exports = router;