function countDigits(num: number): number {
    return Array
        .from(num.toString())
        .filter((i) => num % +i === 0)
        .length;
};