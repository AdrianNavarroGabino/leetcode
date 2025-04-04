function hasMatch(s: string, p: string): boolean {
    return new RegExp(p.replace('*', '.*')).test(s);
};