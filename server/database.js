const fs = require('fs');
const path = require('path');
const { Pool } = require('pg');
const db = require('./models/eventModel');
const res = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/ticketmaster.json')));
const axios = require('axios');

// const PG_URI = 'postgres://yvlhbcyx:aV-Cv5uemYSwC0tCqUZUmyaTOoZbgLbx@fanny.db.elephantsql.com/yvlhbcyx';

// // create a new pool here using the connection string above
// const pool = new Pool({
//   connectionString: PG_URI,
// });

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

// createTAB();

const insertEvent = `INSERT INTO events (name, start_date, start_time, venue, city, state) 
VALUES ($1, $2, $3, $4, $5, $6) ON CONFLICT DO NOTHING`;

// getData(url);
async function insertDB(twentyEvents) {

    console.log('We have entered insertDB');
    console.log(twentyEvents);
    try {
        for (let i = 0; i < twentyEvents.length; i++) {
            let event = twentyEvents[i];
       
            const queryIDs = [
                event.name,
                event.dates.start.localDate, 
                event.dates.start.localTime,
                event._embedded.venues[0].name, 
                event._embedded.venues[0].city.name,
                event._embedded.venues[0].state.name, 
            ];
            console.log("00000    " + i + "    00000");
            await db.query(insertEvent, queryIDs);        
        }
    }
    catch (err) {
        console.log('ERROR: insertDB unable to complete execution')
    }
}

// insertDB();

let apiUrlFirstPart = 'https://app.ticketmaster.com/discovery/v2/events?apikey=zQLojc5AWQltobDlNL7L7uL5r3QmhjUG&source=ticketmaster&locale=*&startDateTime=2021-11-08T19:46:00Z&page=';
let apiUrlEnd = '&countryCode=US&segmentName=Music';

async function dataRequest() {
    
    let tmpData = "wtf";
    
    // set to stop after only doing first two pages of events

    // !!!  however each page is supposed to have 20 events
    // and when I go to the psql terminal and execute this query:
    //      SELECT name FROM events;
    // there are 127 rows, which is 40-something more than before
    // 
    // in addition there are a fair number of titles that appear to be exactly the same,
    // so I'm not sure if the ON CONFLICT DO NOTHING statement is working in our insert query
    //
    //
    // UPDATE:
    // i executed the dataRequest function again and it seems to have added yet another 40 rows from the same
    // two pages of results - seeming to confirm that the conflicts of name are not preventing rows
    // from being added. there are definitely titles that appear to occur multiple times
    // 
    // i'm not sure the best way to go about cleaning up the copies in our database,
    // but we could simply wipe the events table in our database and run this function again to repopulate it.
    // although the function doesn't prevent copies, if we populate all at once, we'll get events with the same 
    // title in our database (as tours have the same title from date to date)
    // but we at least won't have literally the same event appearing multiple times
    
    for (let page = 1; page < 3; page++) {
        let wholeUrl = apiUrlFirstPart + page.toString() + apiUrlEnd;
        
        try {
            tmpData = await axios(wholeUrl);
            // 
            console.log("----    " + page + "    ----------------");
            await insertDB(tmpData.data._embedded.events);
        }
        catch (err) {
           console.log("erroring!") 
        }    
    }
}

dataRequest();

