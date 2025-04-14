function isFascinating(n: number): boolean {
    const candidate = n.toString() + (n * 2) + (n * 3);

    return candidate.split('').sort().join('') === '123456789';
};