function reverseStr(s: string, k: number): string {
    let i = 0;
    let result = '';

    while (i < s.length) {
        result += s.substring(i, i + k).split('').reverse().join('');
        result += s.substring(i + k, i + 2 * k);
        i += k * 2;
    }

    return result;
};