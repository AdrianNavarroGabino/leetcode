const longestPalindrome = (s: string): string => {
    let result: string = s[0];
    for(let i = 0; i < s.length; i++) {
        if(s.length - i < result.length) {
            break;
        }
        let j: number = s.indexOf(s[i], i + 1);

        while(i !== j && j !== -1) {
            let candidate: string = s.substring(i, j + 1);
            let reversedCandidate: string = s.substring(i, j + 1).split('').reverse().join('');

            if(candidate === reversedCandidate && candidate.length > result.length) {
                result = candidate;
            }

            j = s.indexOf(s[i], j + 1);
        }
    }

    return result;
};
