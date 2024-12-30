function checkString(s: string): boolean {
    const bIndex = s.indexOf('b');
    return bIndex === -1 || s.lastIndexOf('a') < bIndex;
};