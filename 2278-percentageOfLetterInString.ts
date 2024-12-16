function percentageLetter(s: string, letter: string): number {
    return Math.floor(s.split('').filter((l) => l === letter).length / s.length * 100);
};