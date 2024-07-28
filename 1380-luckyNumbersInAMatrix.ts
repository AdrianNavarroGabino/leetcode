function luckyNumbers (matrix: number[][]): number[] {
    const result: number[] = [];
    const mins: number[] = matrix.map((row) => Math.min(...row));

    for (let i = 0; i < matrix.length; i++) {
        const idx: number = matrix[i].indexOf(mins[i]);
        let isMax: boolean = true;
        for (let j = 0; j < matrix.length; j++) {
            if (matrix[j][idx] > matrix[i][idx]) {
                isMax = false;
            }
        }

        if (isMax) {
            result.push(matrix[i][idx]);
        }
    }

    return result;
};