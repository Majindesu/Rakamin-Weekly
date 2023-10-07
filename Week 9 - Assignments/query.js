const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'week9db',
    password: 'Alifi@n2001',
    port: '5432'
});

module.exports = pool