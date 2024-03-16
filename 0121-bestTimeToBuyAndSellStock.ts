function maxProfit(prices: number[]): number {
    prices = prices.filter((el, i) => i === 0 || el !== prices[i - 1]);
    
    if (prices.every((el, i) => i === 0 || el < prices[i - 1])) {
        return 0;
    }
    
    const min: number = Math.min(...prices);
    const max: number = Math.max(...prices);

    if (prices.indexOf(min) < prices.lastIndexOf(max)) {
        return max - min;
    }

    const maxPrice: number = Math.max(...prices
        .map((el1, i) => Math.max(...prices.slice(i + 1)
            .filter((el2) => el2 > el1)
            .map((el2) => el2 - el1))));

    return maxPrice < 0 ? 0 : maxPrice;
};