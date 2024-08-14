function sumZero(n: number): number[] {
    const result: number[] = n % 2 ? [0] : [];

    for (let i = 0; i < Math.floor(n / 2); i++) {
        result.push(i + 1, -(i + 1));
    }

    return result;
};