function reorderSpaces(text: string): string {
    const numberOfSpaces = text.match(/\s/g)?.length || 0;
    const words = text.match(/[a-z]+/g) || [];

    if (words.length === 1) {
        return words[0] + ' '.repeat(numberOfSpaces);
    }

    const spacesPerWord = Math.floor(numberOfSpaces / (words.length - 1));
    const spacesAtTheEnd = numberOfSpaces % (words.length - 1);

    return words.join(' '.repeat(spacesPerWord)) + ' '.repeat(spacesAtTheEnd);
};