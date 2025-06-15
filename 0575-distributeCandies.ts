function distributeCandies(candyType: number[]): number {
  const numberOfDifferentCandies = new Set(candyType).size;

  return Math.min(numberOfDifferentCandies, candyType.length / 2);
};