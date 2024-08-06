function countNegatives(grid: number[][]): number {
    return grid.flat().filter((n) => n < 0).length;
};