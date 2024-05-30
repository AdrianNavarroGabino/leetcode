function balancedStringSplit(s: string): number {
    let left: number = 0;
    let right: number = 0;
    let result: number = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'L') {
            left++;
        } else {
            right++;
        }

        if (left === right) {
            result++;
        }
    }

    return result;
};