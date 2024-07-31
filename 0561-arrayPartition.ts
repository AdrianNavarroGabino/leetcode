function arrayPairSum(nums: number[]): number {
    nums.sort((a, b) => a - b);
    return nums.reduce((acc, curr, i) => i % 2 === 0 ? acc + curr : acc, 0);
};