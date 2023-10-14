const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'Week10',
    password: 'Alifi@n2001',
    port: 5432,
})

module.exports = pool