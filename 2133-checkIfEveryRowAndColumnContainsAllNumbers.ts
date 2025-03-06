function checkValid(matrix: number[][]): boolean {
    const nums = Array(matrix.length).fill(false);

    for (let i = 0; i < matrix.length; i++) {
        const numsCol = [...nums];
        const numsRow = [...nums];

        for (let j = 0; j < matrix.length; j++) {
            if (numsRow[matrix[i][j] - 1]) {
                return false;
            } else {
                numsRow[matrix[i][j] - 1] = true;
            }
            if (numsCol[matrix[j][i] - 1]) {
                return false;
            } else {
                numsCol[matrix[j][i] - 1] = true;
            }
        }
    }

    return true;
};