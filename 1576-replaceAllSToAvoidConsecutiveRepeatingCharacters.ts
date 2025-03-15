function modifyString(s: string): string {
    let result = s[0] === '?' ? (s.length === 1 || s[1] !== 'a' ? 'a' : 'b') : s[0];

    for (let i = 1; i < s.length; i++) {
        if (s[i] !== '?') {
            result += s[i];
        } else if (result[i - 1] !== 'a' && s[i + 1] !== 'a') {
            result += 'a';
        } else if (result[i - 1] !== 'b' && s[i + 1] !== 'b') {
            result += 'b';
        } else {
            result += 'c';
        }
    }

    return result;
};