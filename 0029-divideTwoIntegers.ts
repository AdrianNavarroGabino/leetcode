function divide(dividend: number, divisor: number): number {
    let result: number = Math.trunc(dividend / divisor);

    if (result > 2147483647) {
        return 2147483647;
    }
    if (result < -2147483648) {
        return -2147483648;
    }

    return result;
};