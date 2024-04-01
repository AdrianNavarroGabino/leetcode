CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT
BEGIN
    declare numberOfElements int;
    declare result int;
    
    if n < 0 then
        return null;
    end if;
    
    select count(distinct salary) into numberOfElements
    from employee;

    if numberOfElements < n then
        return null;
    end if;

    select t.salary into result from (
        select distinct salary
        from employee
        order by 1 desc
        limit n
    ) as t order by 1
    limit 1;

    return result;
END