# Write your MySQL query statement below
select case when (select count(*) from MyNumbers group by num order by 1 limit 1) > 1 then null
else 
(select num
from MyNumbers
group by num
having count(*) = 1
order by num desc
limit 1)
end as num;