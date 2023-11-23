function isPalindrome(x: number): boolean {
    const reversedNumber: string = Array.from(x.toString()).reverse().join('');
    return x.toString() === reversedNumber;
};