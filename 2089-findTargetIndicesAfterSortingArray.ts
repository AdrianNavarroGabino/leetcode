function targetIndices(nums: number[], target: number): number[] {
    nums.sort((a, b) => a - b);
    return nums.reduce((acc, curr, i) => {
        if (curr === target) {
            acc.push(i);
        }

        return acc;
    }, [] as number[]);
};