function replaceDigits(s: string): string {
    let result = '';

    for (let i = 0; i < s.length; i++) {
        if ('0123456789'.includes(s[i])) {
            result += String.fromCharCode(s[i - 1].charCodeAt(0) + +s[i]);
        } else {
            result += s[i];
        }
    }

    return result;
};