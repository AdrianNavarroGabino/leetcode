function vowelStrings(words: string[], left: number, right: number): number {
    return words
        .slice(left, right + 1)
        .filter((word) => ['a', 'e', 'i', 'o', 'u'].includes(word[0]) &&
            ['a', 'e', 'i', 'o', 'u'].includes(word[word.length - 1]))
        .length;
};