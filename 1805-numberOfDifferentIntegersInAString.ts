function numDifferentIntegers(word: string): number {
    return [
        ...new Set((word.match(/[0-9]+/g) || [])
            .map((num: string) => num.startsWith('0') ? num.replace(/^0+/, '') : num))
    ].length;
};