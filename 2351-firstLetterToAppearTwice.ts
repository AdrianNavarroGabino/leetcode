function repeatedCharacter(s: string): string {
    return s
        .split('')
        .find((l, i) => s.indexOf(l) !== i) || '';
};