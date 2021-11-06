const { Pool, Client } = require('pg');

const PG_URI = 'postgres://yvlhbcyx:aV-Cv5uemYSwC0tCqUZUmyaTOoZbgLbx@fanny.db.elephantsql.com/yvlhbcyx';

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};