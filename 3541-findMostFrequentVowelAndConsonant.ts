function maxFreqSum(s: string): number {
  const letters = s.split('').reduce((acc, letter) => {
    if (['a', 'e', 'i', 'o', 'u'].includes(letter)) {
      acc.vowels[letter]++;
    } else {
      if (!acc.consonants[letter]) {
        acc.consonants[letter] = 0;
      }

      acc.consonants[letter]++;
    }

    return acc;
  }, {
    vowels: {
      a: 0,
      e: 0,
      i: 0,
      o: 0,
      u: 0
    },
    consonants: { b: 0 } as {[key: string]: number}
  });

  return Math.max(...Object.values(letters.vowels)) +
    Math.max(...Object.values(letters.consonants));
};