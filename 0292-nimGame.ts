function canWinNim(n: number): boolean {
    return n < 4 || n % 4 !== 0;
};