function reverseDegree(s: string): number {
    return s
        .split('')
        .reduce((acc, curr, i) => acc + (26 - curr.charCodeAt(0) + 'a'.charCodeAt(0)) * (i + 1), 0);
};