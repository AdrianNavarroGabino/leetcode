function climbStairs(n: number): number {
    const fibo: number[] = [
        0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89,
        144, 233, 377, 610, 987, 1597, 2584,
        4181, 6765, 10946, 17711, 28657, 46368
    ];

    if (n < fibo.length) {
        return fibo[n];
    }
    return climbStairs(n - 1) + climbStairs(n - 2);
};