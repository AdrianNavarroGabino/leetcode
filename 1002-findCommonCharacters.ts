function commonChars(words: string[]): string[] {
    if (words.length === 0) return [];

    const targetWord: { [key: string]: number } = words[0]
        .split('')
        .reduce<Record<string, number>>((acc, curr) => ({ ...acc, [curr]: (acc[curr] || 0) + 1 }), {});

    for (let i = 1; i < words.length; i++) {
        const current: { [key: string]: number } = words[i]
            .split('')
            .reduce<Record<string, number>>((acc, rec) => ({ ...acc, [rec]: (acc[rec] || 0) + 1 }), {});

        for (const key in targetWord) {
            if (current[key]) {
                targetWord[key] = Math.min(targetWord[key], current[key]);
            } else {
                delete targetWord[key];
            }
        }

        if (Object.keys(targetWord).length === 0) {
            return [];
        }
    }

    return Object.keys(targetWord).reduce((acc, curr) => [...acc, ...Array(targetWord[curr]).fill(curr)], [] as string[]);
};