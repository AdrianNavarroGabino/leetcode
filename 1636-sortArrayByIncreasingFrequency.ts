function frequencySort(nums: number[]): number[] {
    const freqs: {[key: number]: number} = nums.reduce((acc, curr) => {
        if (!acc[curr]) {
            acc[curr] = 0;
        }

        acc[curr]++;
        return acc;
    }, {} as {[key: number]: number});


    const keys = Object.keys(freqs);
    keys.sort((a, b) => freqs[+a] === freqs[+b] ? +b - +a : +freqs[+a] - +freqs[+b]);

    return keys.map((n) => Array(freqs[+n]).fill(+n)).flat();
};