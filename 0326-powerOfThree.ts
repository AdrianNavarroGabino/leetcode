function isPowerOfThree(n: number): boolean {
    if (n === 0) {
        return false;
    }

    const lg: number = Math.log(n) / Math.log(3);

    return +lg.toFixed(10) === Math.floor(lg);
};