const express = require('express')
const eventsController = require('../controllers/eventsController');
const router = express.Router();

router.get('/mostArea',
    eventsController.getMostArea,
    (req, res) => res.status(200).json(...res.locals.mostAreaInfo)
);

router.get('/regions');

router.get('/searchResult');

module.exports = router;