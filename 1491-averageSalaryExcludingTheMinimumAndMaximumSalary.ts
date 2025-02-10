function average(salary: number[]): number {
    const max = Math.max(...salary);
    const min = Math.min(...salary);

    return (salary.reduce((acc, curr) => acc + curr, 0) - max - min) / (salary.length - 2);
};