function smallestEvenMultiple(n: number): number {
    let i: number = n + (n % 2);

    while (true) {
        if (i % n === 0) {
            return i;
        }
        i += 2;
    }
};