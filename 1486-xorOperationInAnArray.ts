function xorOperation(n: number, start: number): number {
    return Array
        .from({length: n}, (_, i) => start + i * 2)
        .reduce((acc, curr) => acc ^ curr, 0);
};