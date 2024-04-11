# Write your MySQL query statement below
select t.id,
    case
        when t.p_id is null then 'Root'
        when t.id not in (select t2.p_id from tree t2 where t2.p_id is not null) then 'Leaf'
        when t.id in (select t3.p_id from tree t3 where t3.p_id is not null) then 'Inner'
    end as type
from tree t;