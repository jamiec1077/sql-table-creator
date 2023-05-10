
const inquirer = require("inquirer");
 require("console.table");

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
