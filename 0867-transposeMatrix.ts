function transpose(matrix: number[][]): number[][] {
    const result = [...matrix[0].map((el) => [el])] as number[][];

    for (let i = 1; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        result[j].push(matrix[i][j]);
      }
    }

    return result;
};