function maxProfit(prices: number[]): number {
    prices = prices.filter((el, i) => i === 0 || el !== prices[i - 1]);

    if (prices.every((el, i) => i === 0 || el < prices[i - 1])) {
        return 0;
    }

    while (prices[0] >= prices[1]) {
        prices.shift();
    }

    while (prices[prices.length - 1] < prices[prices.length - 2]) {
        prices.pop();
    }

    const criticalPoints: number[] = [prices[0]];

    for (let i = 1; i < prices.length - 1; i++) {
        if ((prices[i] > prices[i - 1] && prices[i] > prices[i + 1]) ||
        (prices[i] < prices[i - 1] && prices[i] < prices[i + 1])) {
            criticalPoints.push(prices[i]);
        }
    }

    if (criticalPoints.length % 2) {
        criticalPoints.push(prices[prices.length - 1]);
    }

    let result: number = 0;

    for (let i = 0; i < criticalPoints.length; i += 2) {
        result += criticalPoints[i + 1] - criticalPoints[i];
    }

    return result;
};