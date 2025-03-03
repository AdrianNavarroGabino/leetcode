const daysPerMonthAcc = [
    0,
    31,
    59,
    90,
    120,
    151,
    181,
    212,
    243,
    273,
    304,
    334
]

function dayOfYear(date: string): number {
    const [year, month, day] = date.split('-');
    let extraDay = 0;

    if (+month > 2 &&
        +year % 4 === 0 && 
        (+year % 100 !== 0 || 
        (+year % 100 === 0 && +year % 400 === 0))) {
            extraDay = 1;
    }

    return daysPerMonthAcc[+month - 1] + extraDay + +day;
};