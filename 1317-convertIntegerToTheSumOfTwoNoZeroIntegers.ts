function getNoZeroIntegers(n: number): number[] {
  for (let i = 1; i < n; i++) {
    const j = n - i;
    const str1 = i.toString();
    const str2 = j.toString();

    if (!str2.includes('0') && ! str1.includes('0')) {
      return [i, j];
    }
  }

  return [];
};