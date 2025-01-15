function decode(encoded: number[], first: number): number[] {
    return encoded.reduce((acc, curr) => {
        acc.push(acc[acc.length - 1] ^ curr);
        return acc;
    }, [first]);
};