function licenseKeyFormatting(s: string, k: number): string {
    s = s.replace(/-/g, '').toUpperCase();
    const length1: number = s.length % k;

    let result: string = s.substring(0, length1);

    if (length1 > 0 && length1 !== s.length) {
        result += '-';
    }

    let current: number = length1;

    while (current < s.length) {
        result += s.substring(current, current + k);
        current += k;

        if (current < s.length) {
            result += '-';
        }
    }

    return result;
};