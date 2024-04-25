function addDigits(num: number): number {
    while (num >= 10) {
        num = num
            .toString()
            .split('')
            .reduce((acc, curr) => acc + +curr, 0);
    }

    return num;
};