function removeOccurrences(s: string, part: string): string {
    while (s.indexOf(part) > -1) {
        s = s.replace(part, '');
    }

    return s;
};