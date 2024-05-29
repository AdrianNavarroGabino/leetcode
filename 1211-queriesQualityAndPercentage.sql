# Write your MySQL query statement below
select t1.query_name,
    round((select sum(rating / position) from queries t2 where t1.query_name = t2.query_name) / count(*), 2) as quality,
    round((select count(*) from queries t3 where t1.query_name = t3.query_name and t3.rating < 3) / count(*) * 100, 2) as poor_query_percentage
from queries t1
where t1.query_name is not null
group by t1.query_name;