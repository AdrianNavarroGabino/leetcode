function exist(board: string[][], word: string): boolean {
    function search(board: string[][], word: string, i: number, j: number, pos: number, marked: boolean[][]): boolean {
        if(word.length - 1 === pos && word[pos] === board[i][j]) {
            return true;
        }
        if (board[i][j] !== word[pos]) {
            return false;
        }

        
        let left = false;
        let right = false;
        let up = false;
        let down = false;

        const markedAux: boolean[][] = Array(board.length).fill(Array(board[0].length).fill(false)).map((_, i) => [...marked[i]]);
        markedAux[i][j] = true;
        if (j > 0 && !marked[i][j - 1]) {
            left = search(board, word, i, j - 1, pos + 1, markedAux);
        }
        if(j < board[0].length - 1 && !marked[i][j + 1]) {
            right = search(board, word, i, j + 1, pos + 1, markedAux);
        }
        if (i > 0 && !marked[i - 1][j]) {
            up = search(board, word, i - 1, j, pos + 1, markedAux);
        }
        if (i < board.length - 1 && !marked[i + 1][j]) {
            down = search (board, word, i + 1, j, pos + 1, markedAux);
        }

        return left || right || up || down;
    }

    if (word.length > board.length * board[0].length) {
        return false;
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (word[0] === board[i][j]) {
                const marked: boolean[][] = Array(board.length).fill(Array(board[0].length).fill(false));
                if (search(board, word, i, j, 0, marked)) {
                    return true;
                }
            }
        }
    }
    return false;
};