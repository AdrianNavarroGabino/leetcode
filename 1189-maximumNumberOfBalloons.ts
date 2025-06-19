function maxNumberOfBalloons(text: string): number {
  const result = {
    'b': 0,
    'a': 0,
    'l': 0,
    'o': 0,
    'n': 0
  };

  for (let i = 0; i < text.length; i++) {
    if (text[i] in result) {
      result[text[i]]++;
    }
  }

  result.l = Math.floor(result.l / 2);
  result.o = Math.floor(result.o / 2);

  return Math.min(...Object.values(result));
};