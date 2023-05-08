INSERT INTO department (name) VALUES
  ('Sales'),
  ('Marketing'),
  ('Finance');

INSERT INTO role (title, salary, department_id) VALUES
  ('Sales Manager', 80000.00, 1),
  ('Sales Associate', 50000.00, 1),
  ('Marketing Manager', 90000.00, 2),
  ('Marketing Specialist', 60000.00, 2),
  ('Financial Analyst', 70000.00, 3),
  ('Accountant', 60000.00, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
  ('John', 'Doe', 1, NULL),
  ('Jane', 'Smith', 2, 1),
  ('Bob', 'Johnson', 3, 1),
  ('Mary', 'Williams', 4, 3);