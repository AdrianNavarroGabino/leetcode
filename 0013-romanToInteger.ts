const romanNumbers: Object = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
};

const romanToInt = (s: string): number => Array.from(s).reduce((acc, curr, i, arr) => {
    if(romanNumbers[arr[i - 1]] < romanNumbers[curr]) {
        return acc - (2 * romanNumbers[arr[i - 1]]) + romanNumbers[curr]
    }
    return acc + romanNumbers[curr];
}, 0);