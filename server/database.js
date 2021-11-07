const fs = require('fs');
const path = require('path');
const { Pool } = require('pg');
const db = require('./models/eventModel');
const res = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/ticketmaster.json')));
const axios = require('axios');

async function createTAB() {

    const createEvents = `CREATE TABLE events (
        id BIGSERIAL NOT NULL PRIMARY KEY,
        name VARCHAR (255) NOT NULL,
        start_date VARCHAR(64) NOT NULL,
        start_time VARCHAR(64),
        venue VARCHAR (255),
        city VARCHAR(40),
        state VARCHAR(64),
        url VARCHAR (255),
        UNIQUE(id)
    )`

    try {
        await db.query(createEvents);
        return;
    }
    catch (err) {
        console.log('ERROR: createTAB unable to complete execution');
    }
}



async function insertDB(twentyEvents) {

    const insertEvent = `INSERT INTO events (name, start_date, start_time, venue, city, state, url, event_id) 
                        VALUES ($1, $2, $3, $4, $5, $6, $7, $8) ON CONFLICT DO NOTHING`;
    // const insertEvent = `INSERT INTO events (name, start_date, start_time, venue, city, state, url, event_id) 
    //                     SELECT $1, $2, $3, $4, $5, $6, $7, $8
    //                     WHERE
    //                         NOT EXISTS (
    //                             SELECT event_id FROM events WHERE event_id = $8
    //                         );`;
    console.log('We have entered insertDB');
    try {
        for (let i = 0; i < twentyEvents.length; i++) {
            let event = twentyEvents[i];
            const eventImageLink = await findBestPic(event.images)

            const queryIDs = [
                event.name,
                event.dates.start.localDate,
                event.dates.start.localTime,
                event._embedded.venues[0].name,
                event._embedded.venues[0].city.name,
                event._embedded.venues[0].state.name,
                eventImageLink,
                event.id,
            ];
            console.log(queryIDs)
            console.log("00000    " + i + "    00000");
            await db.query(insertEvent, queryIDs);
        }
    }
    catch (err) {
        console.log('ERROR: insertDB unable to complete execution')
    }
}

async function findBestPic(imageArr) {
    let maxSeen = -Infinity;
    let maxLink = ""
    if (!imageArr.length) {
        console.log("empty image array")
        return
    }
    for (let i = 0; i < imageArr.length; i++) {
        let currImg = imageArr[i]
        if (currImg['ratio'] == "3_2") {
            if (currImg['width'] > maxSeen) {
                maxSeen = currImg['width']
                maxLink = currImg['url']
            }
        }
    }
    if (maxLink === "") {
        console.log("couldn't find img url")
        return
    }
    return maxLink
}



async function dataRequest() {
    let apiUrlFirstPart = 'https://app.ticketmaster.com/discovery/v2/events?apikey=zQLojc5AWQltobDlNL7L7uL5r3QmhjUG&source=ticketmaster&locale=*&startDateTime=2021-11-08T19:46:00Z&page=';
    let apiUrlEnd = '&countryCode=US&segmentName=Music';
    let tmpData = "";

    for (let page = 1; page < 701; page++) {
        let wholeUrl = apiUrlFirstPart + page.toString() + apiUrlEnd;

        try {
            tmpData = await axios(wholeUrl);
            console.log(tmpData)
            console.log("----    " + page + "    ----------------");
            await insertDB(tmpData.data._embedded.events);
        }
        catch (err) {
            console.log("erroring!")
            console.log(`Check the ticketmaster API at page equal ${page}`);
            break;
        }
    }
}

// adding column to Event, alter it if you need extra constraint
async function addColumn(newColName, dataType, constraint = "") {
    if (typeof newColName != 'string' || typeof DataType != 'string') {
        console.log("Please put both input as type: String")
    }
    try {
        let query = `ALTER TABLE events
            ADD COLUMN ` + newColName + ` ` + dataType + ` ` + constraint + `;`;
        console.log("adding col query: ", query)
        await db.query(query);
    } catch (err) {
        console.log(`Errored while adding column: ${err}.`)
    }

}

async function deleteColumn(colName) {
    if (typeof colName != 'string') {
        console.log("Please put input type : String")
    }
    try {
        let query = `ALTER TABLE events
        DROP COLUMN ` + colName + `;`
        await db.query(query)
    } catch (err) {
        console.log(`Error while adding column: ${err}.`)
    }
}

async function wipeTable(tableName) {
    if (typeof tableName != 'string') {
        console.log("Please put input type : String")
    }
    try {
        let query = `DELETE FROM ` + tableName +
            ` WHERE start_date IS NOT NULL`;
        await db.query(query);
    } catch (err) {
        console.log(`Error while whiping out table ${err}.`)
    }
}

// insertDB();
// createTAB();
// getData(url);
// deleteColumn('eventId')
// wipeTable('events')
// addColumn('event_Id', 'VARCHAR(40)', 'PRIMARY KEY')
// dataRequest();