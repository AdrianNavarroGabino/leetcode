function onesMinusZeros(grid: number[][]): number[][] {
  const result = [] as number[][];
  const onesRow = [...Array(grid.length).fill(0)] as number[];
  const onesCol = [...Array(grid[0].length).fill(0)] as number[];

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      onesRow[i] += grid[i][j];
      onesCol[j] += grid[i][j];
    }
  }

  const zerosRow = onesRow.map((num) => grid.length - num);
  const zerosCol = onesCol.map((num) => grid[0].length - num);

  for (let i = 0; i < grid.length; i++) {
    result.push([]);
    for (let j = 0; j < grid[0].length; j++) {
      result[i].push(onesRow[i] + onesCol[j] - zerosRow[i] - zerosCol[j]);
    }
  }

  return result;
};