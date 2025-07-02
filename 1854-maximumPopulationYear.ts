function maximumPopulation(logs: number[][]): number {
  const minYear = Math.min(...logs.map((log) => log[0]));
  const maxYear = Math.max(...logs.map((log) => log[1]));

  let maxPopulation = 0;
  let maximumPopulationYear = minYear - 1;

  for (let i = minYear; i < maxYear; i++) {
    const currentPopulation = logs.filter((log) => log[0] <= i && log[1] > i).length;

    if (currentPopulation > maxPopulation) {
      maxPopulation = currentPopulation;
      maximumPopulationYear = i;
    }
  }

  return maximumPopulationYear;
};