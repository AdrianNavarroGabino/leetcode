function rowAndMaximumOnes(mat: number[][]): number[] {
    const numberOfOnesPerRow: number[] = mat.map((row) => row
        .filter((n) => n === 1).length);

    const count = Math.max(...numberOfOnesPerRow);
    const index = numberOfOnesPerRow.findIndex((n) => n === count);

    return [index, count];
};