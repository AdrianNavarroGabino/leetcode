function sortByBits(arr: number[]): number[] {
    return arr.sort((a, b) => {
        const aBits = a
        .toString(2)
        .split('')
        .filter((d) => d === '1').length;
        
        const bBits = b
            .toString(2)
            .split('')
            .filter((d) => d === '1').length;

        return aBits - bBits || a - b;
    });
};