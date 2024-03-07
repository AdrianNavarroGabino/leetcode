/**
 Do not return anything, modify matrix in-place instead.
 */
 function setZeroes(matrix: number[][]): void {
    const zeroes: {x: number, y: number}[] = [];

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                zeroes.push({x: i, y: j});
            }
        }
    }

    for (const coords of zeroes) {
        for (let i = 0; i < matrix.length; i++) {
            matrix[i][coords.y] = 0;
        }

        for (let j = 0; j < matrix[0].length; j++) {
            matrix[coords.x][j] = 0;
        }
    }
 };