function maxIceCream(costs: number[], coins: number): number {
  let result = 0;
  costs.sort((a, b) => a - b);

  while (costs[0] <= coins) {
    coins -= (costs.shift() || 0);
    result++;
  }

  return result;
};