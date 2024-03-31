# Write your MySQL query statement below
select distinct l1.num as ConsecutiveNums
from logs l1
where l1.num = (
    select l2.num
    from logs l2
    where l1.id + 1 = l2.id
      and l2.num = (
        select l3.num
        from logs l3
        where l2.id + 1 = l3.id
          and l3.num = l1.num
      )
);