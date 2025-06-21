function numEquivDominoPairs(dominoes: number[][]): number {
  return Object.values(dominoes
    .reduce((acc, curr) => {
      const currStr = [Math.min(...curr), Math.max(...curr)].join(',');

      if (!acc[currStr]) {
        acc[currStr] = 0;
      }

      acc[currStr]++;
      return acc;
    }, {} as { [key: string]: number; }))
    .reduce((acc, curr) => acc + (curr === 1 ? 0 : curr * (curr - 1) / 2), 0);
};