const express = require('express')
const eventsController = require('../controllers/eventsController.js');
const app = require('../server.js');
const router = express.Router()

router.get('/', (req, res) => {
    res.status(200);
})

router.post('/mostArea',
    eventsController.getMostArea,
    (req, res) => {
        res.status(200).json({ ...res.locals.mostArea })
    }
);

router.post('/country',
    eventsController.getCountries,
    (req, res) => {
        res.status(200).json(res.locals.countries)
    }
);

router.post('/state',
    eventsController.getStates,
    (req, res) => {
        console.log(...res.locals.states);
        res.status(200).json(res.locals.states)
    }
);

router.post('/searchRes',
    eventsController.getSearch,
    (req, res) => {
        res.status(200).json(res.locals.searchData)
    }
);

module.exports = router;