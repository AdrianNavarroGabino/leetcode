function oddCells(m: number, n: number, indices: number[][]): number {
    const matrix: number[][] = [];

    for (let i = 0; i < m; i++) {
        matrix.push([]);
        
        for (let j = 0; j < n; j++) {
            matrix[matrix.length - 1].push(0);
        }
    }

    for (let i = 0; i < indices.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            matrix[indices[i][0]][j]++;
        }

        for (let j = 0; j < matrix.length; j++) {
            matrix[j][indices[i][1]]++;
        }
    }

    return matrix.reduce((acc1, curr1) => acc1 + curr1.reduce((acc2, curr2) => acc2 + curr2 % 2, 0), 0);
};