function numWaterBottles(numBottles: number, numExchange: number): number {
  let result = numBottles;
  let emptyBottles = 0;

  while (numBottles > 0 || emptyBottles >= numExchange) {
    emptyBottles += numBottles;
    numBottles = Math.floor(emptyBottles / numExchange);
    emptyBottles %= numExchange;
    result += numBottles;
  }

  return result;
};