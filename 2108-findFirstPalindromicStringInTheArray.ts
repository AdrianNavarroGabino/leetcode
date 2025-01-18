function firstPalindrome(words: string[]): string {
    return words.find((word) => word === word.split('').reverse().join('')) || '';
};