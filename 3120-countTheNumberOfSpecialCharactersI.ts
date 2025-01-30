function numberOfSpecialChars(word: string): number {
    const specialChars = new Set<string>();

    for (let i = 0; i < word.length; i++) {
        const target = word[i].toUpperCase();
        if (word[i] !== target && !specialChars.has(word[i]) && word.includes(target)) {
            specialChars.add(word[i]);
        }
    }

    return specialChars.size;
};