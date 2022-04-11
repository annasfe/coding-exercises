#EX1 CREATE SCHEMA (NOT IN SQLITE!)
CREATE SCHEMA IF NOT EXISTS employees;


#EX2 CREATE TABLES

CREATE TABLE employees (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name  VARCHAR(14)     NOT NULL,
    last_name   VARCHAR(16)     NOT NULL,
    hire_date   DATE            NOT NULL,
    works_in   	CHAR(4)			NOT NULL
);

CREATE TABLE departments (
    dept_num     CHAR(4)         NOT NULL  PRIMARY KEY,
    dept_name   VARCHAR(40)     NOT NULL
);


CREATE TABLE salaries (
    id      INT   NOT NULL,
    salary  INT   NOT NULL,
    from_date   DATE NOT NULL,
    FOREIGN KEY (id) REFERENCES employees (id),
    PRIMARY KEY (id, from_date)
); 

#EX3 INSERT DATA

INSERT INTO `employees` (first_name, last_name, hire_date, works_in) VALUES 
('Georgi','Facello','1986-06-26', 'd002'),
('Bezalel','Simmel','1985-11-21', 'd002'),
('Parto','Bamford','1986-08-28', 'd003'),
('Chirstian','Koblick','1986-12-01', 'd007'),
('Kyoichi','Maliniak','1989-09-12', 'd005'),
('Anneke','Preusig','1989-06-02', 'd005'),
('Tzvetan','Zielinski','1989-02-10', 'd006'),
('Saniya','Kalloufi','1994-09-15', 'd008'),
('Sumant','Peac','1985-02-18', 'd001');

INSERT INTO `departments` VALUES 
('d001','Marketing'),
('d002','Finance'),
('d003','Human Resources'),
('d004','Production'),
('d005','Development'),
('d006','Quality Management'),
('d007','Sales'),
('d008','Research'),
('d009','Customer Service');

INSERT INTO `salaries`  VALUES 
(1, 60000,'1986-06-26'),
(2, 48340,'1985-11-21'),
(3, 10000,'1986-08-28'),
(4, 44000,'1986-12-01'),
(5, 25688,'1989-09-12'),
(6, 67890,'1989-06-02'),
(7, 33000,'1989-02-10'),
(8,79000,'1994-09-15'),
(9,23000,'1985-02-18');

#EX4 QUERY and QUERY WITH CONDITION
select * from departments;
select * from departments where dept_num = "d004";
select first_name, last_name from employees where id = 3;


#EX5 UPDATE DATA
UPDATE employees SET first_name = 'allwoman' where id = 1;
UPDATE employees SET last_name = 'allwoman' where id = 1;
select * from employees where id = 1;

#EX6 MODIFY TABLE 
ALTER TABLE departments
ADD num_employees int;

select * from departments;


#EX7 DELETE AND DROP 
delete from departments where dept_num = 'd001';
select * from departments;

DROP TABLE departments;

#EX8 INNER JOIN
SELECT em.first_name, em.last_name, dep.dept_name
FROM employees em INNER JOIN departments dep ON em.works_in = dep.dept_num;


SELECT em.first_name, em.last_name, sal.salary
FROM employees em INNER JOIN salaries sal ON em.id = sal.id;








