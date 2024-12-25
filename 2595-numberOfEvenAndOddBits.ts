function evenOddBit(n: number): number[] {
    const bin: string[] = n.toString(2).split('');
    const even: number = bin.filter((d, i) => d === '1' && (bin.length - i - 1) % 2 === 0).length;
    const odd: number = bin.filter((d, i) => d === '1' && (bin.length - i - 1) % 2 === 1).length;
    return [even, odd];
};