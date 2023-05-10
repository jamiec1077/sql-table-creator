
const mysql = require("mysql2");




const connection = mysql.createconnection({
  host: 'localhost', 
  user: 'user',
  password: 'jamie123',
  database: 'employee_manager',
 
});
connection.connect(function(err){
  if(err)throw err
})
module.exports = connection;







