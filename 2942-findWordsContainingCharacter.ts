function findWordsContaining(words: string[], x: string): number[] {
    return words.reduce((acc, curr, i) => curr.includes(x) ? [...acc, +i] : acc, [] as number[]);
};