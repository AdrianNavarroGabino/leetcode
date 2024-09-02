function chalkReplacer(chalk: number[], k: number): number {
    const total: number = chalk.reduce((acc, curr) => acc + curr, 0);
    k %= total;
    let i: number = 0;

    while (k >= 0) {
        k -= chalk[i];
        i++;
    }

    return k >= -chalk[i - 1] ? i - 1 : i;
};