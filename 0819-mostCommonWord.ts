function mostCommonWord(paragraph: string, banned: string[]): string {
    const words = (paragraph
        .toLowerCase()
        .match(/\w+/g) || [])
        .filter((word) => !banned.includes(word))
        .reduce((acc, curr) => {
            if (!acc[curr]) {
                acc[curr] = 0;
            }

            acc[curr]++;

            return acc;
        }, {} as {[key: string]: number});

    return Object.entries(words).reduce((max, entry) => 
        entry[1] > words[max] ? entry[0] : max, Object.keys(words)[0]);
};