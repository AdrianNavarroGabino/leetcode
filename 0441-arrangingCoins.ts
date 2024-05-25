function arrangeCoins(n: number): number {
    let result: number = 1;

    while (true) {
        if ((result * result + result) / 2 > n) {
            return result - 1;
        }

        result++;
    }
};