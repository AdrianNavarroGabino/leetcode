function countSegments(s: string): number {
    s = s.trim();

    if (s.indexOf(' ') === -1) {
        return s.length > 0 ? 1 : 0;
    }

    return s.match(/ +/g)!.length + 1;
};