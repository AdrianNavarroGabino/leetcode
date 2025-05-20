function frequencySort(s: string): string {
  const frequencies = s.split('').reduce((acc, curr) => {
    if (!acc[curr]) {
      acc[curr] = 0;
    }

    acc[curr]++;
    return acc;
  }, {} as { [key: string]: number; });

  const letters = Object.keys(frequencies);

  return letters
    .sort((a, b) => frequencies[b] - frequencies[a])
    .map((letter) => letter.repeat(frequencies[letter]))
    .join('');
};