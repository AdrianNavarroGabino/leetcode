function maxVowels(s: string, k: number): number {
    let vowels: number = s
        .substring(0, k)
        .match(new RegExp('[aeiou]{1}', 'g'))?.length || 0;
    
    let max: number = vowels;

    for (let i = k; i < s.length; i++) {
        if (s[i].match(new RegExp('[aeiou]', 'i'))) {
            vowels++;
        }
        if (s[i - k].match(new RegExp('[aeiou]', 'i'))) {
            vowels--;
        }
        
        if (vowels === k) {
            return k;
        }
        if (vowels > max) {
            max = vowels;
        }
    }

    return max;
};