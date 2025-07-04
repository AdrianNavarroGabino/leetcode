function checkAlmostEquivalent(word1: string, word2: string): boolean {
  const word1Aux = word1.split('').reduce((acc, curr) => {
    if (!acc[curr]) {
      acc[curr] = 0;
    }

    acc[curr]++;
    return acc;
  }, {} as {[key: string]: number});

  const word2Aux = word2.split('').reduce((acc, curr) => {
    if (!acc[curr]) {
      acc[curr] = 0;
    }

    acc[curr]++;
    return acc;
  }, {} as {[key: string]: number});

  const keys = [... new Set(Object.keys(word1Aux).concat(Object.keys(word2Aux)))];

  return keys.every((key) => Math.abs((word1Aux[key] || 0) - (word2Aux[key] || 0)) <= 3);
};