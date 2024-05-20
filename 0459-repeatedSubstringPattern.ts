function repeatedSubstringPattern(s: string): boolean {
    return !!s.match(/^(.+)\1+$/);
};