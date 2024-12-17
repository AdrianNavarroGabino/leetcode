function countGoodSubstrings(s: string): number {
    let result: number = 0;

    for (let i = 0; i < s.length - 2; i++) {
        if (s[i + 1] === s[i + 2]) {
            i++;
        } else if (s[i] !== s[i + 1] && s[i] !== s[i + 2]) {
            result++;
        }
    }

    return result;
};