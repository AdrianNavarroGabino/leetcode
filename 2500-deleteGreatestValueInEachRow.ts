function deleteGreatestValue(grid: number[][]): number {
    let result: number = 0;

    while (grid.some((r) => r.length)) {
        const candidates: number[] = [];

        for (let i = 0; i < grid.length; i++) {
            if (!grid[i].length) {
                candidates.push(0);
            } else {
                candidates.push(Math.max(...grid[i]));
            }
        }

        result += Math.max(...candidates);
        grid = grid.map((row, i) => {
            row.splice(row.indexOf(candidates[i]), 1);
            return row;
    }   );
    }

    return result;
};