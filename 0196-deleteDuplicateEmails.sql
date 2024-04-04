# Write your MySQL query statement below
delete from person
where id in (
    select p2.id
    from (select * from person) p1 inner join (select * from person) p2 on p1.email = p2.email
    where p1.id < p2.id
);