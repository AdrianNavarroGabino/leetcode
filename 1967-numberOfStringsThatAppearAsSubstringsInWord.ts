function numOfStrings(patterns: string[], word: string): number {
    return patterns.filter((p: string) => word.includes(p)).length;
};