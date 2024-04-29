function wordPattern(pattern: string, s: string): boolean {
    const patternArr: string = [...new Set(pattern.split(''))].join('');
    const words = s.split(' ').map((a) => a.length === 1 ? a + 'a' : a);
    let changedWords = Array(words.length).fill(false);
    let idx = 0;

    if (words.length !== pattern.length) {
        return false;
    }

    for (let i = 0; i < words.length; i++) {
        if (!changedWords[i]) {
            changedWords[i] = true;
            let j = i;
            do {
                j = words.indexOf(words[i], j + 1);
                if (j !== -1) {
                    changedWords[j] = true;
                    words[j] = patternArr[idx];
                }
            } while (j !== -1);
            words[i] = patternArr[idx];
            idx++;
        }
    }

    return words.join('') === pattern;
};