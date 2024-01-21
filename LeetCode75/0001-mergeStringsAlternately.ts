function mergeAlternately(word1: string, word2: string): string {
    word1 = word1.padEnd(word2.length, ' ');
    word2 = word2.padEnd(word1.length, ' ');

    return [...word1].map((w1, i) => `${w1}${word2[i]}`.trim()).join('');
};