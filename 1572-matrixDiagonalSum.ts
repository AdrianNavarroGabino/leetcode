function diagonalSum(mat: number[][]): number {
    let result = 0;

    for (let i = 0; i < mat.length; i++) {
        const j = mat.length - i - 1;
        result += mat[i][i];

        if (i !== j) {
            result += mat[i][j];
        }
    }

    return result;
};