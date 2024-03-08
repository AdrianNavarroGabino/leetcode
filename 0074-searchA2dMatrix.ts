function searchMatrix(matrix: number[][], target: number): boolean {
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i][matrix[i].length - 1] >= target) {
            return matrix[i].includes(target);
        }
    }
    return false;
};