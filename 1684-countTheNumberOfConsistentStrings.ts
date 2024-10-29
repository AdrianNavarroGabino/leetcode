function countConsistentStrings(allowed: string, words: string[]): number {
    return words.filter((w) => w.match(new RegExp(`^[${allowed}]*$`))).length;
};