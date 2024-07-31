const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'buyers',
    password: 'saturday',
    port: 5432, // порт по умолчанию для PostgreSQL
});

module.exports = pool;
