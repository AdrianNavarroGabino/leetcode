function countServers(grid: number[][]): number {
  let result = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j]) {
        if (grid[i].some((val, idx) => val && idx !== j)) {
          result++;
        } else {
          for (let k = 0; k < grid.length; k++) {
            if (grid[k][j] && k !== i) {
              result++;
              break;
            }
          }
        }
      }
    }
  }

  return result;
};