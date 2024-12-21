function validStrings(n: number): string[] {
    const max: number = parseInt('1'.repeat(n), 2);
    const result: string[] = [];

    for (let i = 0; i <= max; i++) {
        const bin: string = i.toString(2).padStart(n, '0');

        if (bin.split('').every((d, i) => d !== '0' || i === bin.length - 1 || bin[i + 1] !== '0')) {
            result.push(bin);
        }
    }

    return result;
};