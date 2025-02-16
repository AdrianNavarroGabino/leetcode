function buyChoco(prices: number[], money: number): number {
    prices.sort((a, b) => a - b);
    const leftover = money - prices[0] - prices[1];

    return leftover >= 0 ? leftover : money;
};