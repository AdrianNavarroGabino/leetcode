const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function dayOfTheWeek(day: number, month: number, year: number): string {
    const date = new Date(year, month - 1, day);

    return days[date.getDay()];
};