function removeOuterParentheses(s: string): string {
    let result: string = '';
    let parentheses = 0;

    for (let i = 0; i < s.length; i++) {
        if (parentheses !== 0) {
            result += s[i];
        }

        parentheses += s[i] === '(' ? 1 : -1;

        if (parentheses === 0) {
            result = result.substring(0, result.length - 1);
        }
    }
    return result;
};