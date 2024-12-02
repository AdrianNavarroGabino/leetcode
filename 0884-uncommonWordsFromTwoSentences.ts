function uncommonFromSentences(s1: string, s2: string): string[] {
    return `${s1} ${s2}`
        .split(' ')
        .filter((word, _, arr) => arr.indexOf(word) === arr.lastIndexOf(word));
};