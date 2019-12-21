const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '2019@Ubuntu',
    database: 'udemy_node'
});

module.exports = pool.promise();
