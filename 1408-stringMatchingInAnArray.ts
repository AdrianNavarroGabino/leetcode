function stringMatching(words: string[]): string[] {
  return words
    .filter((target, i) => words
      .some((candidate, j) => candidate.includes(target) && i !== j));
};