# Write your MySQL query statement below
select t.customer_id
from (
    select distinct customer_id, product_key
    from customer) as t
group by t.customer_id
having count(*) = (
    select count(*)
    from product
);