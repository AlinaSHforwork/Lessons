const { Pool } = require('pg');

const pool = new Pool({
    user: 'your_username',         // e.g., 'postgres'
    password: 'your_password',     // your actual password
    host: 'localhost',
    port: 5432,                    // default Postgres port
    database: 'testdb'             // the database you created
});

module.exports = {
    query: (text, params) => pool.query(text, params),
};
