function findAndReplacePattern(words: string[], pattern: string): string[] {
    const patternAux = pattern.split('').reduce((acc, curr) => {
        if (!acc.map[curr]) {
            acc.map[curr] = Object.keys(acc.map).length + 1;
        }

        acc.result.push(acc.map[curr]);
        return acc;
    }, { map: {} as { [key: string]: number }, result: [] as number[] }).result;

    const result = [] as string[];

    for (let i = 0; i < words.length; i++) {
        const partialResult = {} as { [key: string]: number };
        let samePattern = true;

        for (let j = 0; j < words[i].length; j++) {
            if (!partialResult[words[i][j]]) {
                partialResult[words[i][j]] = Object.keys(partialResult).length + 1;
            }

            if (partialResult[words[i][j]] !== patternAux[j]) {
                samePattern = false;
                break;
            }
        }

        if (samePattern) {
            result.push(words[i]);
        }
    }

    return result;
};