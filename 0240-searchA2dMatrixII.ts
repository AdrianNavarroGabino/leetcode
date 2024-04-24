function searchMatrix(matrix: number[][], target: number): boolean {
    let i: number = 0;
    let j: number = 0;

    while (i < matrix.length && j < matrix[0].length && j >= 0) {
        if (matrix[i][j] === target) {
            return true;
        }

        if (matrix[i][j] < target) {
            if (j === matrix[0].length - 1) {
                i++;
                j = 0;
            } else {
                j++;
            }
        } else {
            if (j === 0 || matrix[i][j - 1] < target) {
                i++;
            }
            j--;
        }
    }

    return false;
};