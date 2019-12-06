const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '2018@Ubuntu',
    database: 'node_complete'
});

module.exports = pool.promise();