
const dotenv = require("dotenv")
const inquirer = require("inquirer");
const mysql = require("mysql2");
const consoletable = require("console.table")




const connection = mysql.createConnection({

    host: 'localhost',
    port: 3306,
    username:'user',
    password:'jamie123',
    database:'employee_manager'
});


connection.connect(function (err) {
    if (err) throw err;
    console.log("connection ");
    
});



function promptUser()
{
    inquirer.prompt({
        
        type: "list",
        name: selectedChoice,
        message: "What would you like to do?",
        
        Choices: [
            "View Employees",
            "View Employees by Department",
            "Add Employee",
            "Remove Employees",
            "Update EmployeeRole",
            "Add NewRole",
            "End"

       ]
    })
    .then (function({selectedChoice}){
       switch(selectedChoice)
       {
        case "View Employees":
          viewEmployee();
          break;

        case "View Employees by Department":
          viewEmployeeByDepartment();
          break;
      
        case "Add Employee":
          addEmployee();
          break;

        case "Remove Employees":
          removeEmployees();
          break;

        case "Update EmployeeRole":
          updateEmployeeRole();
          break;

        case "Add NewRole":
          addRole();
          break;

        case "End":
          connection.end();
          break;
       }
    });
}



    function viewEmployee()
    {

    }
    function viewEmployeeByDepartment()
    {

    }
    function addEmployee()
    {

    }

    function removeEmployees()
    {

    }

    function updateEmployeeRole()
    {

    }

    function end()
    {

    }
