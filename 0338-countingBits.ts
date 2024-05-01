function countBits(n: number): number[] {
    return Array(n + 1)
        .fill(0)
        .map((_, i) => (i >>> 0)
            .toString(2)
            .replace(/0/g, '')
            .length);
};