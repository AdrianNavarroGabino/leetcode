function addSpaces(s: string, spaces: number[]): string {
  let result = ' ' + s.substring(spaces[spaces.length - 1]);

  for (let i = spaces.length - 2; i >= 0; i--) {
    result = ' ' + s.substring(spaces[i], spaces[i + 1]) + result;
  }

  result = s.substring(0, spaces[0]) + result;

  return result;
};