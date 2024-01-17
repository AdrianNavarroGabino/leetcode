function isValidSudoku(board: string[][]): boolean {
    for (let i = 0; i < 9; i++) {
        const row: string[] = board[i].filter((el) => el !== '.');
        if (row.length !== [...new Set(row)].length) {
            return false;
        }
    }

    for (let i = 0; i < 9; i++) {
        const column: string[] = board[i]
            .map((_, j) => board[j][i])
            .filter((el) => el !== '.');
        
        if (column.length !== [...new Set(column)].length) {
            return false;
        }
    }

    for (let i = 0; i < 9; i++) {
        const subbox = board[i]
            .map((_, j) => board[Math.floor(i / 3) * 3 + Math.floor(j / 3)][i % 3 * 3 + j % 3])
            .filter((el) => el !== '.');

        if (subbox.length !== [...new Set(subbox)].length) {
            return false;
        }
    }

    return true;
};