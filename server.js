const express = require('inquirer');

const mysql = require('mysql');

const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.urlencoded({ extended: false }));
app.use(express.json());


const db = mysql.createConnection(
  {
    host: 'localhost',
    
    user: 'root',
  
    password: 'jamie123',
    database: 'employee_manager'
  },
  console.log(`Connected to the employee_manager database.`)
);


pool.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }

  console.log('Connected to MySQL database.');

  
  connection.release();
});

// export the pool for use in other modules
module.exports = pool;