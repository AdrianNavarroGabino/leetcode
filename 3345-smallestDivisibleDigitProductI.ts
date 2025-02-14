function smallestNumber(n: number, t: number): number {
    while (true) {
        const product = n.toString().split('').reduce((acc, curr) => acc * +curr, 1);

        if (product % t === 0) {
            return n;
        }

        n++;
    }
};