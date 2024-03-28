# Write your MySQL query statement below
select t1.Department as Department,
    e2.name as Employee,
    t1.Salary as Salary from (
        select d.id as DeptId, max(e.salary) as Salary, d.name as Department
        from employee e inner join department d
        on e.departmentId = d.id
        group by d.name
    ) as t1 left join employee e2
    on e2.departmentId = t1.DeptId and e2.salary = t1.Salary;