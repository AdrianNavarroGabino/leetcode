function isSubstringPresent(s: string): boolean {
    const reverse = s.split('').reverse().join('');

    for (let i = 0; i < s.length - 1; i++) {
        const substring = s[i] + s[i + 1];

        if (s.includes(substring) && reverse.includes(substring)) {
            return true;
        }
    }

    return false;
};