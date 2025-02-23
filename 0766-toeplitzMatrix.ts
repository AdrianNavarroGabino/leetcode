function isToeplitzMatrix(matrix: number[][]): boolean {
    for (let i = 0; i < matrix[0].length - 1; i++) {
        let x = 1;
        let y = i + 1;

        while (y < matrix[0].length && x < matrix.length) {
            if (matrix[0][i] !== matrix[x][y]) {
                return false;
            }

            x++;
            y++;
        }
    }

    for (let j = 1; j < matrix.length - 1; j++) {
        let x = j + 1;
        let y = 1;

        while (y < matrix[0].length && x < matrix.length) {
            if (matrix[j][0] !== matrix[x][y]) {
                return false;
            }

            x++;
            y++;
        }
    }

    return true;
};