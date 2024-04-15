function countPrimes(n: number): number {
    if (n < 3) {
        return 0;
    }

    let result: number = 1;

    for (let i = 3; i < n; i += 2) {
        let found = false;

        if (i % 2 === 0) {
            continue;
        }
        for (let j = 3; j <= Math.sqrt(i); j += 2) {
            if (i % j === 0) {
                found = true;
                break;
            }
        }

        if (!found) {
            result++;
        }
    }

    return result;
};