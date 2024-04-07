# Write your MySQL query statement below
select t.customer_number
from (
    select count(*) as total, customer_number
    from orders
    group by customer_number
    order by total desc
    limit 1) t;