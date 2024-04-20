function isPowerOfTwo(n: number): boolean {
    if (n === 1) {
        return true;
    }
    
    let result: number = 2;

    while (result < n) {
        result *= 2;
    }

    return result === n;
};