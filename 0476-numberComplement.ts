function findComplement(num: number): number {
    const bin: string = num.toString(2);

    return parseInt(bin.split('').map((d) => d === '0' ? '1' : '0').join(''), 2);
};