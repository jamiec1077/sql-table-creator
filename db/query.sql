SELECT id, name FROM department;




SELECT r.id, r.title, d.name AS department, r.salary
FROM role r
JOIN department d ON r.department_id = d.id;
View all employees:


SELECT e.id, e.first_name, e.last_name, r.title AS job_title, d.name AS department, r.salary, CONCAT(m.first_name, ' ', m.last_name) AS manager
FROM employee e
JOIN role r ON e.role_id = r.id
JOIN department d ON r.department_id = d.id
LEFT JOIN employee m ON e.manager_id = m.id;
Add a department:

INSERT INTO department (name) VALUES ('Human Resources');
Add a role:


INSERT INTO role (title, salary, department_id) VALUES ('HR Manager', 