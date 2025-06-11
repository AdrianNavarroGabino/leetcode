function isPowerOfFour(n: number): boolean {
  if (n === 0) {
    return false;
  }
  
  const result = Math.log(n) / Math.log(4);

  return result === Math.floor(result);
};