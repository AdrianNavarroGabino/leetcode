const getAliveNeightbors = (board: number[][], i: number, j: number): number => {
    let result = 0;

    if (i !== 0) {
        if (board[i - 1][j]) {
            result++;
        }

        if (j !== 0) {
            if (board[i - 1][j - 1]) {
                result++;
            }
        }

        if (j !== board[0].length - 1) {
            if (board[i - 1][j + 1]) {
                result++;
            }
        }
    }

    if (i !== board.length - 1) {
        if (board[i + 1][j]) {
            result++;
        }

        if (j != board[0].length - 1) {
            if (board[i + 1][j + 1]) {
                result++;
            }
        }

        if (j !== 0) {
            if (board[i + 1][j - 1]) {
                result++;
            }
        }
    }

    if (j !== 0) {
        if (board[i][j - 1]) {
            result++;
        }
    }

    if (j !== board[0].length - 1) {
        if (board[i][j + 1]) {
            result++;
        }
    }

    return result;
}

/**
 Do not return anything, modify board in-place instead.
 */
 function gameOfLife(board: number[][]): void {
    const boardAux = [] as number[][];

    for (let i = 0; i < board.length; i++) {
        boardAux.push([]);
        for (let j = 0; j < board[0].length; j++) {
            const numberOfAliveNeightbors = getAliveNeightbors(board, i, j);
            if (board[i][j] === 1) {
                boardAux[i][j] = numberOfAliveNeightbors === 2 || numberOfAliveNeightbors === 3 ? 1 : 0;
            } else {
                boardAux[i][j] = numberOfAliveNeightbors === 3 ? 1 : 0;
            }
        }
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            board[i][j] = boardAux[i][j];
        }
    }
 };