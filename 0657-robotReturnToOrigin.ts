function judgeCircle(moves: string): boolean {
    let x: number = 0;
    let y: number = 0;

    for (let i = 0; i < moves.length; i++) {
        switch (moves[i]) {
            case 'U':
                y++;
                break;
            case 'D':
                y--;
                break;
            case 'R':
                x++;
                break;
            case 'L':
                x--;
                break;
        }
    }

    return x === 0 && y === 0;
};