function minimumPushes(word: string): number {
    const mappedWord: {[key: string]: number} = word.split('').reduce((acc, curr) => {
        if (!acc[curr]) {
            acc[curr] = 0;
        }

        acc[curr]++;
        return acc;
    }, {} as {[key: string]: number});

    if (Object.keys(mappedWord).length < 9) {
        return word.length;
    }

    const lengths: number[] = Object.values(mappedWord).sort((a, b) => b - a);
    let times: number = 0;
    let result: number = 0;

    for (let i = 0; i < lengths.length; i++) {
        if (i % 8 == 0) {
            times++;
        }

        result += lengths[i] * times;
    }

    return result;
};