function kthSmallest(matrix: number[][], k: number): number {
    const newMatrix: number[] = matrix.flat().sort((a, b) => a - b);

    return newMatrix[k - 1];
};