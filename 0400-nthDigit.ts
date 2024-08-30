function findNthDigit(n: number): number {
    let digitLength: number = 1;
    let count: number = 9;
    let start: number = 1;

    while (n > digitLength * count) {
        n -= digitLength * count;
        digitLength++;
        count *= 10;
        start *= 10;
    }

    const result: number = start + Math.floor((n - 1) / digitLength);
    const digitIndex: number = (n - 1) % digitLength;

    return +result.toString()[digitIndex];
};