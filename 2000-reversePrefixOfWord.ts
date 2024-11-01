function reversePrefix(word: string, ch: string): string {
    const index: number = word.indexOf(ch);

    if (index === -1) {
        return word;
    }

    const part1: string = word
        .substring(0, index + 1)
        .split('')
        .reverse()
        .join('');
    const part2: string = word.substring(index + 1);

    return `${part1}${part2}`;
};