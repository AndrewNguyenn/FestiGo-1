const fs = require('fs');
const path = require('path');
const { Pool } = require('pg');
const db = require('../models/eventModels.js');



const PG_URI = 'postgres://yvlhbcyx:aV-Cv5uemYSwC0tCqUZUmyaTOoZbgLbx@fanny.db.elephantsql.com/yvlhbcyx';

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI,
});

const res = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/ticketmaster.json')));



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
        await pool.query(createEvents);
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
            await pool.query(insertEvent, queryIDs);
        
        }
    }
    catch (err) {
        console.log('ERROR: insertDB unable to complete execution')
    }
}

insertDB();

