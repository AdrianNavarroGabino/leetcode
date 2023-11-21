const lengthOfLongestSubstring = (s: string): number => s.split('').reduce((acc, curr, i) => {
    if(s.length - i < acc) {
        return acc;
    }
    
    let substring = curr;
    for (let j = i + 1; j < s.length; j++) {
        if (substring.includes(s[j])) {
            break;
        }
        substring += s[j];
    }

    return substring.length > acc ? substring.length : acc;
}, 0);