function countAsterisks(s: string): number {
    while (s.indexOf('|') > -1) {
        s = s.replace(/\|[a-z\*]*\|/, '');
    }

    s = s.replace(/[a-z]+/g, '');
    return s.length;
};