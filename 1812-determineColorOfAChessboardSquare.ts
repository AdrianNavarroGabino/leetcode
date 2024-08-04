function squareIsWhite(coordinates: string): boolean {
    return (' abcdefgh'.indexOf(coordinates[0]) + +coordinates[1]) % 2 === 1;
};