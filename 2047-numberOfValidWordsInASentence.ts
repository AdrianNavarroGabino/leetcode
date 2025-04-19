function countValidWords(sentence: string): number {
    return sentence
        .split(/\s+/)
        .filter((word) => /^[a-zA-Z]*([a-zA-Z]\-[a-zA-Z])?[a-zA-Z]*[!.,]?$/.test(word) &&
            /[a-zA-Z!.,]+/.test(word))
        .length;
};