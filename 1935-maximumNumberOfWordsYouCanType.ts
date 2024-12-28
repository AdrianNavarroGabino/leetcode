function canBeTypedWords(text: string, brokenLetters: string): number {
    return text
        .split(' ')
        .filter((word) => !word.match(new RegExp(`[${brokenLetters}]`)))
        .length;
};