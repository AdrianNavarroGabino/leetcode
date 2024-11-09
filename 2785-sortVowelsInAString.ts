function sortVowels(s: string): string {
    const vowels: string[] = s.match(/[aeiou]/gi) || [];

    if (!vowels.length) {
        return s;
    }
    vowels.sort();
    if (vowels.length === s.length) {
        return vowels.join('');
    }

    let result: string = '';

    for (let i = 0; i < s.length; i++) {
        if (s[i].match(/[aeiou]/gi)) {
            result += vowels.shift();
        } else {
            result += s[i];
        }
    }

    return result;
};