function alternateDigitSum(n: number): number {
    return n
        .toString()
        .split('')
        .reduce((acc, curr, i) => acc + +curr * Math.pow(-1, i), 0);
};