function closeStrings(word1: string, word2: string): boolean {
    if (word1 === word2) {
        return true;
    }

    if (word1.length !== word2.length) {
        return false;
    }

    if ([...new Set(word1.split(''))].length !== [...new Set((word1 + word2).split(''))].length) {
        return false;
    }

    word1 = [...word1].sort().join('');
    word2 = [...word2].sort().join('');

    if (word1 === word2) {
        return true;
    }

    const count1: number[] = Object.values([...word1].reduce((acc, curr) => {
        if (!acc[curr]) {
            acc[curr] = 0;
        }
        acc[curr]++;

        return acc;
    }, {} as { [key: string]: number })).sort((a, b) => a - b);

    const count2: number[] = Object.values([...word2].reduce((acc, curr) => {
        if (!acc[curr]) {
            acc[curr] = 0;
        }
        acc[curr]++;
        
        return acc;
    }, {} as { [key: string]: number })).sort((a, b) => a - b);

    return count1.every((el, i) => el === count2[i]);
};