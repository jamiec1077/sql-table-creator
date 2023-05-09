const mysql = require('mysql2');


const pool = mysql.createPool({
  host: 'localhost', 
  user: 'user',
  password: 'jamie123',
  database: 'employee_manager',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool;







