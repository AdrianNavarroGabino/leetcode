function isNumber(s: string): boolean {
    return /[0-9]/.test(s) && /^[+-]?[0-9]*(\.[0-9]*)?([0-9]\.?[eE][+-]?[0-9]+)?$/.test(s);
};