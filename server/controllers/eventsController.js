const db = require('../models/eventModel');
const tool = require('../tool');
const eventsController = {};

eventsController.getMostArea = async (req, res, next) => {
    const startDays = tool.getDays(req.body.startYear, req.body.startMonth, req.body.startDay);
    const endDays = tool.getDays(req.body.endYear, req.body.endMonth, req.body.endDay);
    res.locals.mostArea = []
    qIDs = [
        startDays,
        endDays,
        req.body.country,
        req.body.state,
    ]
    const getCountryByDateOnlyQ = `SELECT country, COUNT (country) AS cc FROM events 
                                        WHERE datedays BETWEEN $1 and $2 GROUP BY country
                                        ORDER BY cc DESC LIMIT 1`
    const getStateByDateOnlyQ = `SELECT state, COUNT (state) AS cc FROM events
                                        WHERE datedays BETWEEN $1 and $2 GROUP By state
                                        ORDER BY cc DESC LIMIT 1`
    const getCityByDateOnlyQ = `SELECT city, COUNT (city) AS cc FROM events
                                        WHERE datedays BETWEEN $1 and $2 GROUP By city
                                        ORDER BY cc DESC LIMIT 1`
    const getStateByDateCountryQ = `SELECT state, COUNT (state) AS cc FROM events
                                        WHERE datedays BETWEEN $1 and $2
                                        AND country = $3 
                                        GROUP BY state
                                        ORDER BY cc DESC LIMIT 1`
    const getCityByDateCountryQ = `SELECT city, COUNT (city) AS cc FROM events
                                        WHERE datedays BETWEEN $1 and $2
                                        AND country = $3 
                                        GROUP BY city
                                        ORDER BY cc DESC LIMIT 1`
    const getCityByDateCountryStateQ = `SELECT city, COUNT (city) AS cc FROM events
                                            WHERE datedays BETWEEN $1 and $2
                                            AND country = $3
                                            AND state = $4
                                            GROUP BY city
                                            ORDER BY cc DESC LIMIT 1`

    try {
        if (req.body.country !== "" && req.body.state !== "") {
            let cityData = await db.query(getCityByDateCountryStateQ, qIDs);
            res.locals.mostArea.push(cityData.rows)
        } else if (req.body.country !== "") {
            qIDs.pop()
            let stateData = await db.query(getStateByDateCountryQ, qIDs);
            let cityData = await db.query(getCityByDateCountryQ, qIDs);
            res.locals.mostArea.push(stateData.rows)
            res.locals.mostArea.push(cityData.rows)
        } else {
            qIDs.pop()
            qIDs.pop()
            let countryData = await db.query(getCountryByDateOnlyQ, qIDs);
            let stateData = await db.query(getStateByDateOnlyQ, qIDs);
            let cityData = await db.query(getCityByDateOnlyQ, qIDs);
            res.locals.mostArea.push(countryData.rows)
            res.locals.mostArea.push(stateData.rows)
            res.locals.mostArea.push(cityData.rows)
        }
        console.log(res.locals.mostArea)
        return next();
    } catch (err) {
        return next(err);
    }
};

eventsController.getCountries = async (req, res, next) => {
    const startDays = tool.getDays(req.body.startYear, req.body.startMonth, req.body.startDay);
    const endDays = tool.getDays(req.body.endYear, req.body.endMonth, req.body.endDay);
    res.locals.mostArea = []
    qIDs = [
        startDays,
        endDays,
    ]
    const regionQuery = `SELECT DISTINCT country FROM events
                            WHERE datedays BETWEEN $1 and $2
                            ORDER BY country DESC`
    try {
        const data = await db.query(regionQuery, qIDs);
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
                            ORDER BY state ASC`
    try {
        const data = await db.query(stateQuery, qIDs);
        res.locals.states = data.rows;
        return next();
    } catch (err) {
        return next(err);
    }
}

eventsController.getSearch = async (req, res, next) => {
    const startDays = tool.getDays(req.body.startYear, req.body.startMonth, req.body.startDay);
    const endDays = tool.getDays(req.body.endYear, req.body.endMonth, req.body.endDay);
    let headQuery = `SELECT * FROM events WHERE datedays BETWEEN $1 and $2 `
    const tailQuery = `ORDER BY datedays ASC`
    qIDs = [
        startDays,
        endDays,
    ]
    if (req.body.country !== "") {
        qIDs.push(req.body.country)
        headQuery += `AND country = $3 `
    }
    if (qIDs.length === 3 & req.body.state !== "") {
        qIDs.push(req.body.state)
        headQuery += `AND state = $4 `
    }
    headQuery += tailQuery;
    try {
        console.log(headQuery)
        console.log(qIDs)
        const data = await db.query(headQuery, qIDs)
        res.locals.searchData = data.rows;
        return next();
    } catch (err) {
        return next(err);
    }
};

module.exports = eventsController;