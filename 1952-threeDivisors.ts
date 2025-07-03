function isThree(n: number): boolean {
  let found = false;

  for (let i = 2; i <= Math.floor(n / 2); i++) {
    if (n % i === 0) {
      if (found) {
        return false;
      }

      found = true;
    }
  }

  return found;
};