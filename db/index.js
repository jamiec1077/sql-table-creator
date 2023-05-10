const connection = require("./connection")

class DB {
    constructor(connection) {
        this.connection = connection;
    }

    // 1 find all employees
    findAllEmployees() {
        return this.connection.promise().query(
            "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name,' ',manager.last_name) AS manager FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employee manager ON manager.id = employee.manager_id;"
        );
    }

    // 2 find all possible managers
    findAllManagers() {
        const query = `
      SELECT DISTINCT CONCAT(manager.first_name, ' ', manager.last_name) AS manager
      FROM employee
      INNER JOIN employee manager ON employee.manager_id = manager.id
    `;

        return this.connection.promise().query(query);
    }

    //3 create employee
    createEmployee(employee) {
        const { firstName, lastName, roleId, managerId } = employee;
        const query = `
      INSERT INTO employee (first_name, last_name, role_id, manager_id)
      VALUES (?, ?, ?, ?)
    `;
        const values = [firstName, lastName, roleId, managerId];

        return this.connection.promise().query(query, values);
    }

    //4 remove employee
    removeEmployee(employeeId) {
        const query = `
          DELETE FROM employee
          WHERE id = ?
        `;
        const values = [employeeId];

        return this.connection.promise().query(query, values);
    }

    //5 update employee role
    updateEmployeeRole(employeeId, roleId) {
        const query = `
          UPDATE employee
          SET role_id = ?
          WHERE id = ?
        `;
        const values = [roleId, employeeId];

        return this.connection.promise().query(query, values);
    }

    //6 update employee manager 
    updateEmployeeManager(employeeId, managerId) {
        const query = `
          UPDATE employee
          SET manager_id = ?
          WHERE id = ?
        `;
        const values = [managerId, employeeId];

        return this.connection.promise().query(query, values);
    }

    //7 find all roles
    findAllRoles() {
        return this.connection.promise().query("SELECT * FROM role");
    }

    //8 create a role 
    createRole(role) {
        const { title, salary, departmentId } = role;
        const query = "INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)";
        const values = [title, salary, departmentId];

        return this.connection.promise().query(query, values);
    }

    //9 remove a role 
    removeRole(roleId) {
        const query = "DELETE FROM role WHERE id = ?";
        return this.connection.promise().query(query, [roleId]);
    }

    //10 find all departments
    findAllDepartments() {
        const query = `
          SELECT *
          FROM department
        `;

        return this.connection.promise().query(query);
    }

    // 11 create department
    createDepartment(department) {
        const { name } = department;
        const query = `
          INSERT INTO department (name)
          VALUES (?)
        `;
        const values = [name];

        return this.connection.promise().query(query, values);
    }

// 12 remove department
removeDepartment(departmentId) {
    const query = `
      DELETE FROM department
      WHERE id = ?
    `;
    const values = [departmentId];
  
    return this.connection.promise().query(query, values);
  }
//13 find all employees by deptartment
findAllEmployeesByDepartment(departmentName) {
    const query = `
          SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager
          FROM employee
          INNER JOIN role ON employee.role_id = role.id
          INNER JOIN department ON role.department_id = department.id
          LEFT JOIN employee manager ON employee.manager_id = manager.id
          WHERE department.name = ?
        `;
    const values = [departmentName];

    return this.connection.promise().query(query, values);
}
//14 find all employees by manager
findAllEmployeesByManager(managerId) {
    const query = `
          SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary
          FROM employee
          LEFT JOIN role ON employee.role_id = role.id
          LEFT JOIN department ON role.department_id = department.id
          WHERE employee.manager_id = ?
        `;
    return this.connection.promise().query(query, [managerId]);
}
///15 view department budgets 
viewDepartmentBudgets() {
    const query = `
      SELECT department.name AS department, SUM(role.salary) AS budget
      FROM employee
      INNER JOIN role ON employee.role_id = role.id
      INNER JOIN department ON role.department_id = department.id
      GROUP BY department.name;
    `;
    return this.connection.promise().query(query);
  }
  
  module.exports= new DB(connection);