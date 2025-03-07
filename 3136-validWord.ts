function isValid(word: string): boolean {
    return word.length >= 3 &&
        /^[0-9a-zA-Z]*$/.test(word) &&
        /[aeiouAEIOU]/.test(word) &&
        /[^aeiouAEIOU0-9]/.test(word);
};