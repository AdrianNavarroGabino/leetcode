function finalPrices(prices: number[]): number[] {
    return prices.map((p, i) => {
        for (let j = i + 1; j < prices.length; j++) {
            if (p >= prices[j]) {
                return p - prices[j];
            }
        }

        return p;
    })
};