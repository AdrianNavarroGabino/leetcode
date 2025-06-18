function findOcurrences(text: string, first: string, second: string): string[] {
  const result = [] as string[];
  const splittedText = text.split(' ');

  for (let i = 0; i < splittedText.length - 2; i++) {
    if (splittedText[i] === first && splittedText[i + 1] === second) {
      result.push(splittedText[i + 2])
    } 
  }

  return result;
};