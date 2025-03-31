function detectCapitalUse(word: string): boolean {
    return /^[A-Z]+$/.test(word) || /^[A-Z][a-z]+$/.test(word) || /^[a-z]+$/.test(word);
};