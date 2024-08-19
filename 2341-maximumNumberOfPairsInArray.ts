function numberOfPairs(nums: number[]): number[] {
    return Object.values(nums.reduce((acc, curr) => {
        if (!acc[curr]) {
            acc[curr] = 0;
        }

        acc[curr]++;
        return acc;
    }, {} as {[key: number]: number}))
        .reduce((acc, curr) => {
            acc[0] += Math.floor(curr / 2);
            acc[1] += curr % 2;

            return acc;
        }, [0, 0]);
};