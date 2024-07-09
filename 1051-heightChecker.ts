function heightChecker(heights: number[]): number {
    const expected: number[] = [...heights].sort((a, b) => a - b);
    return heights.reduce((acc, curr, i) => acc + (curr === expected[i] ? 0 : 1), 0);
};