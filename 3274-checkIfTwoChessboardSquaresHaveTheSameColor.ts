function checkTwoChessboards(coordinate1: string, coordinate2: string): boolean {
    const val1 = coordinate1.charCodeAt(0) + +coordinate1[1];
    const val2 = coordinate2.charCodeAt(0) + +coordinate2[1];

    return val1 % 2 === val2 % 2;
};