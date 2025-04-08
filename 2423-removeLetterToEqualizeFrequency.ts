function equalFrequency(word: string): boolean {
    const letters = word.split('').reduce((acc, curr) => {
        if (!acc[curr]) {
            acc[curr] = 0;
        }

        acc[curr]++;
        return acc;
    }, {} as {[key: string]: number});

    const frequencies = Object.values(letters);

    if (frequencies.length === 1) {
        return true;
    }
    
    if (frequencies.length === 2) {
        return Math.abs(frequencies[0] - frequencies[1]) === 1 || frequencies[0] === 1 || frequencies[1] === 1;
    }

    frequencies.sort();

    if (frequencies[0] === frequencies[frequencies.length - 1]) {
        return frequencies[0] === 1;
    }

    if (frequencies[0] === frequencies[frequencies.length - 2]) {
        return frequencies[frequencies.length - 1] - frequencies[0] === 1 || frequencies[frequencies.length - 1] === 1;
    }

    if (frequencies[1] === frequencies[frequencies.length - 1]) {
        return frequencies[0] - frequencies[1] === 1 || frequencies[0] === 1;
    }

    return false;
};