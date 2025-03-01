function toGoatLatin(sentence: string): string {
    return sentence
        .split(' ')
        .map((word, i) => (['a', 'e', 'i', 'o', 'u'].includes(word[0].toLowerCase()) ?
            word + 'ma' : word.substring(1) + word[0] + 'ma') + 'a'.repeat(i + 1))
        .join(' ');
};