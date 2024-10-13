function maximumNumberOfStringPairs(words: string[]): number {
    let result: number = 0;

    for (let i = 0; i < words.length - 1; i++) {
        const reversed: string = words[i].split('').reverse().join('');

        if (words.indexOf(reversed, i + 1) > -1) {
            result++;
        }
    }

    return result;
};