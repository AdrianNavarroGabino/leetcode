function minBitFlips(start: number, goal: number): number {
    const greatestBin: string = start > goal ?
        start.toString(2) : goal.toString(2);
    const lowestBin: string = start < goal ?
        start.toString(2).padStart(greatestBin.length, '0') :
        goal.toString(2).padStart(greatestBin.length, '0');
    
    let count: number = 0;

    for (let i = 0; i < greatestBin.length; i++) {
        if (greatestBin[i] !== lowestBin[i]) {
            count++;
        }
    }

    return count;
};