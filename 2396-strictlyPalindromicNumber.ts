function isStrictlyPalindromic(n: number): boolean {
    for (let i = 2; i < n - 1; i++) {
        const candidate: string = n.toString(i);

        if (candidate !== Array.from(candidate).reverse().join('')) {
            return false;
        }
    }

    return true;
};