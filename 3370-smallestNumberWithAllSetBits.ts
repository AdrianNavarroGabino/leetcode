function smallestNumber(n: number): number {
    return parseInt(n.toString(2).replaceAll('0', '1'), 2);
};