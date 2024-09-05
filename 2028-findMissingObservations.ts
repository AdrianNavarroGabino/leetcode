function missingRolls(rolls: number[], mean: number, n: number): number[] {
    const currentSum: number = rolls.reduce((acc, curr) => acc + curr, 0);
    const totalRolls: number = n + rolls.length;
    const sumLeft: number = (mean * totalRolls) - currentSum;

    if (sumLeft / n > 6 || sumLeft / n < 1) {
        return [];
    }

    if (sumLeft % n === 0) {
        return Array.from({length: n}, () => sumLeft / n);
    } else {
        return Array.from({length: n}, (_, i) => i < sumLeft % n ? Math.ceil(sumLeft / n) : Math.floor(sumLeft / n));
    }
};