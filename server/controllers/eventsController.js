const db = require('../models/eventModel');
const tool = require('../tool');
const eventsController = {};

eventsController.getMostArea = async (req, res, next) => {
    const startDays = tool.getDays(req.body.startYear, req.body.startMonth, req.body.startDay);
    const endDays = tool.getDays(req.body.endYear, req.body.endMonth, req.body.endDay);
    qIDs = [
        startDays,
        endDays,
        req.body.country,
        req.body.state,
    ]
    const getCountryByDateOnlyQ = `SELECT country, COUNT (country) AS cc FROM events 
                                        WHERE datedays BETWEEN $1 and $2 GROUP BY country
                                        ORDER BY cc DESC LIMIT 1`;
    const getStateByDateOnlyQ = `SELECT state, COUNT (state) AS sc FROM events
                                        WHERE datedays BETWEEN $1 and $2 GROUP By country
                                        ORDER BY sc DESC LIMIT 1`;
    const getCityByDateOnlyQ = `SELECT city, COUNT (city) AS cc FROM events
                                        WHERE datedays BETWEEN $1 and $2 GROUP By city
                                        ORDER BY cc DESC LIMIT 1`;
    const getStateByDateCountryQ = `SELECT state, COUNT (state) AS sc FROM events
                                        WHERE datedays BETWEEN $1 and $2
                                        AND country = $3 
                                        GROUP BY state
                                        ORDER BY sc DESC LIMIT 1`;
    const getCityByDateCountryQ = `SELECT city, COUNT (city) AS cc FROM events
                                        WHERE datedays BETWEEN $1 and $2
                                        AND country = $3 
                                        GROUP BY city
                                        ORDER BY cc DESC LIMIT 1`;
    const getCityByDateCountryStateQ = `SELECT city, COUNT (city) AS cc FROM events
                                            WHERE datedays BETWEEN $1 and $2
                                            AND country = $3
                                            AND state = $4
                                            GROUP BY city
                                            ORDER BY cc DESC LIMIT 1`;

    try {
        if (req.body.country !== "" && req.body.state !== "") {
            res.locals.cityCounts = await db.query(getCityByDateCountryStateQ, qIDs);
        } else if (req.body.country !== "") {
            res.locals.stateCounts = await db.query(getStateByDateCountryQ, QIDs);
            res.locals.cityCounts = await db.query(getCityByDateCountryQ, QIDs);
        } else {
            res.locals.countryCounts = await db.query(getCountryByDateOnlyQ, QIDs);
            res.locals.stateCounts = await db.query(getStateByDateOnlyQ, QIDs);
            res.locals.cityCounts = await db.query(getCityByDateOnlyQ);
        }
        return next();
    } catch (err) {
        return next(err);
    }
};

eventsController.getCountries = async (req, res, next) => {
    const regionQuery = `SELECT DISTINCT country FROM events`
    try {
        const data = await db.query(regionQuery);
        // console.log(data)
        res.locals.countries = data.rows;
        console.log(res.locals.countries)
        return next();
    } catch (err) {
        return next(err);
    }
};

eventsController.getStates = async (req, res, next) => {
    const startDays = tool.getDays(req.body.startYear, req.body.startMonth, req.body.startDay);
    const endDays = tool.getDays(req.body.endYear, req.body.endMonth, req.body.endDay);
    qIDs = [
        startDays,
        endDays,
        req.body.country,
    ]

    const stateQuery = `SELECT DISTINCT state FROM events 
                            WHERE country = $3
                            AND datedays BETWEEN $1 and $2
                            ORDER BY ASC`;
    try {
        const data = await db.query(stateQuery);
        console.log(data)
        res.locals.states = data.rows;
        return next();
    } catch (err) {
        return next(err);
    }
}

eventsController.getSearch = async (req, res, next) => {
    const startDays = tool.getDay(req.body.startYear, req.body.startMonth, req.body.startDay);
    const endDays = tool.getDay(req.body.endYear, req.body.endMonth, req.body.endDay);
    qIDs = [
        startDays,
        endDays,
        req.body.country,
        req.body.state,
    ]
    const searchQuery = `SELECT * FROM events WHERE datedays 
                            BETWEEN $1 and $2
                            AND country = $3
                            AND state = $4
                            ORDER BY datedays ASC`;
    try {
        res.locals.searchData = await db.query(searchQuery, qIDs)
        return next();
    } catch (err) {
        return next(err);
    }
};

module.exports = eventsController;