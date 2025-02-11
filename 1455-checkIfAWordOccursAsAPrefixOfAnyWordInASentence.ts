function isPrefixOfWord(sentence: string, searchWord: string): number {
    const index = sentence
        .split(' ')
        .findIndex((word) => word.startsWith(searchWord));

    return index === - 1 ? index : index + 1;
};