/* Write your T-SQL query statement below */
select d.name as Department,
t1.name as Employee,
t1.salary as Salary
from (
    select e.*,
    dense_rank()
    over (partition by e.departmentId order by e.salary desc) as rank
    from employee e
) as t1 inner join department d on t1.departmentId = d.id
where t1.rank <= 3;