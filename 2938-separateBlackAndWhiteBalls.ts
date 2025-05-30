function minimumSteps(s: string): number {
  let result = 0;
  let white = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === '0') {
      white++;
    } else {
      result += white;
    }
  }

  return result;
};