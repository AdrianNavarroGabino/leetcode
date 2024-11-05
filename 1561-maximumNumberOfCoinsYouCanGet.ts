function maxCoins(piles: number[]): number {
    let coins: number = 0;
    piles.sort((a, b) => b - a);

    while (piles.length) {
        piles.shift();
        coins += piles.shift() || 0;
        piles.pop()
    }

    return coins;
};