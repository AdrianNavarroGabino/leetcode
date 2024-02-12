function equalPairs(grid: number[][]): number {
    const resRow: { [key: string]: number } = {};
    const resCol: { [key: string]: number } = {};
    for (let i = 0; i < grid.length; i++) {
        const keyRow: string = grid[i].join('-');
        
        if (!resRow[keyRow]) {
            resRow[keyRow] = 0;
        }
        resRow[keyRow]++;

        let keyCol: string = '';
        
        for (let j = 0; j < grid[i].length; j++) {
            keyCol += grid[j][i].toString() + '-';
        }

        keyCol = keyCol.substring(0, keyCol.length - 1);

        if (!resCol[keyCol]) {
            resCol[keyCol] = 0;
        }
        resCol[keyCol]++;
    }

    return Object.keys(resRow).reduce((acc, curr) => {
        if (resCol[curr]) {
            acc += resRow[curr] * resCol[curr];
        }
        return acc;
    }, 0);
};

