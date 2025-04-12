function canMakeSquare(grid: string[][]): boolean {
    const possibleSquares = [
        [grid[0][0], grid[0][1], grid[1][0], grid[1][1]],
        [grid[0][1], grid[0][2], grid[1][1], grid[1][2]],
        [grid[1][0], grid[1][1], grid[2][0], grid[2][1]],
        [grid[1][1], grid[1][2], grid[2][1], grid[2][2]]
    ];

    return possibleSquares
        .map((square) => square.sort())
        .some((square) => square[1] === square[2])
};