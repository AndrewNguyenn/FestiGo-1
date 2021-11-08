const express = require('express')
const eventsController = require('../controllers/eventsController.js');
const app = require('../server.js');
const router = express.Router()

router.get('/', (req, res) => {
    res.status(200);
})

router.get('/mostArea',
    eventsController.getMostArea,
    (req, res) => {
        res.status(200).json({ ...res.locals.mostArea })
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
    (req, res) => {
        console.log(...res.locals.states);
        res.status(200).json(res.locals.states)
    }
);

router.get('/searchRes',
    eventsController.getSearch,
    (req, res) => {
        res.status(200).json(res.locals.searchData)
    }
);

module.exports = router;