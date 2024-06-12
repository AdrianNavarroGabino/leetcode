function maximumWealth(accounts: number[][]): number {
    return Math.max(...accounts.map((banks) => banks.reduce((acc, curr) => acc + curr, 0)));
};