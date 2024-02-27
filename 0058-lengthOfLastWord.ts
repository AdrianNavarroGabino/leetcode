function lengthOfLastWord(s: string): number {
    return s.trim().replace(/^.* /, '').length;
};