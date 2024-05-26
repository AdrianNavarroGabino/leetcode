function hammingDistance(x: number, y: number): number {
    let xBin: string = x.toString(2);
    let yBin: string = y.toString(2);

    const maxLength = Math.max(xBin.length, yBin.length);

    xBin = xBin.padStart(maxLength, '0');
    yBin = yBin.padStart(maxLength, '0');

    let count: number = 0;

    for (let i = 0; i < maxLength; i++) {
        if (xBin[i] !== yBin[i]) {
            count++;
        }
    }

    return count;
};