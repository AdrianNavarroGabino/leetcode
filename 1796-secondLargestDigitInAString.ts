function secondHighest(s: string): number {
    const digits = [...new Set((s.match(/\d/g) || []))];
    digits.sort();
    return digits.length < 2 ? -1 : +digits[digits.length - 2];
};