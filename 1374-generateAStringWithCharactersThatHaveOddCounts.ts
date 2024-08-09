function generateTheString(n: number): string {
    if (n === 1) {
        return 'a';
    }
    if (n % 2 === 0) {
        return 'a'.repeat(n - 1) + 'b';
    }

    return 'a'.repeat(n - 2) + 'b' + 'c';
};