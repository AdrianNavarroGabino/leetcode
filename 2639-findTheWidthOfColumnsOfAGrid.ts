function findColumnWidth(grid: number[][]): number[] {
    return grid[0]
        .map((_, colIndex) => grid.map(row => row[colIndex]))
        .map((row) => Math.max(...row.map((value) => value.toString().length)));
};