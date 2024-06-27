function differenceOfSums(n: number, m: number): number {
    const isDivisible = (a: number): boolean => a % m === 0;
    
    const num1: number = Array(n)
        .fill(0)
        .reduce((acc, _, idx) => acc + (isDivisible(idx + 1) ? 0 : idx + 1), 0);
    
    const num2: number = Array(n)
        .fill(0)
        .reduce((acc, _, idx) => acc + (isDivisible(idx + 1) ? idx + 1 : 0), 0);
    
    return num1 - num2;
};