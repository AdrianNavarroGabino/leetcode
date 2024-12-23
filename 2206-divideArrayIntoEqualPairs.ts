function divideArray(nums: number[]): boolean {
    return Object.values(nums.reduce((acc, curr) => ({
        ...acc,
        [curr]: acc[curr] ? acc[curr] + 1 : 1
    }), {} as {[key: number]: number}))
        .every((value) => value % 2 === 0);
};