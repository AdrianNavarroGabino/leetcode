function isUgly(n: number): boolean {
    if (n === 0) {
        return false;
    }

    const factors: number[] = [2, 3, 5];
    let i = 0;

    while (i < factors.length) {
        if (n % factors[i] === 0) {
            n /= factors[i];
            i = 0;
        } else {
            i++;
        }
    }

    return n === 1;
};