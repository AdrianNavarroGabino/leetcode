function countCharacters(words: string[], chars: string): number {
  let result = 0;
  for (let i = 0; i < words.length; i++) {
    const currChars = [...new Set(chars.split(''))].reduce((acc, curr) => {
      acc[curr] = -1;
      return acc;
    }, {} as { [key: string]: number; });

    let correctWord = true;

    for (let j = 0; j < words[i].length; j++) {
      const index = chars.indexOf(words[i][j], currChars[words[i][j]] + 1);

      if (index === -1) {
        correctWord = false;
        break;
      }

      currChars[words[i][j]] = index;
    }

    if (correctWord) {
      result += words[i].length;
    }
  }

  return result;
};