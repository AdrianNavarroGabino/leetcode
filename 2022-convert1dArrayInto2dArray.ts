function construct2DArray(original: number[], m: number, n: number): number[][] {
    if (m * n !== original.length) {
        return [];
    }

    const result: number[][] = [];

    for (let i = 0; i < m; i++) {
        const partialResult: number[] = [];

        for (let j = 0; j < n; j++) {
            partialResult.push(original.shift() || 0);
        }

        result.push(partialResult);
    }

    return result;
};