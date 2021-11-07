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
VALUES ($1, $2, $3, $4, $5, $6)`;

// getData(url);
async function insertDB() {
    const festEvent = res._embedded.events

    try {
    
        for (let i = 0; i < festEvent.length; i++) {
            let event = festEvent[i];
       
            const queryIDs = [
                event.name,
                event.dates.start.localDate, 
                event.dates.start.localTime,
                event._embedded.venues[0].name, 
                event._embedded.venues[0].city.name,
                event._embedded.venues[0].state.name, 
            ];
            await db.query(insertEvent, queryIDs);
        
        }
    }
    catch (err) {
        console.log('ERROR: insertDB unable to complete execution')
    }
}

// insertDB();

let apiUrlFirstPart = 'https://app.ticketmaster.com/discovery/v2/events?apikey=zQLojc5AWQltobDlNL7L7uL5r3QmhjUG&source=ticketmaster&locale=*&startDateTime=2021-11-08T19:46:00Z&page=';
let page = 2;
let apiUrlEnd = '&countryCode=US&segmentName=Music';

async function dataRequest() {
    let tmpData = "wtf";
    let wholeUrl = apiUrlFirstPart + page.toString() + apiUrlEnd;
    try {
        tmpData = await axios(wholeUrl);
        console.log(tmpData.data._embedded.events);
    }
    catch (err) {
       console.log("erroring!") 
    }
    console.log("123123");
    console.log(tmpData.data.__embedded.events);
}
dataRequest();

