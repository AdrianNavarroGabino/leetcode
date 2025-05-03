function minOperations(nums: number[], k: number): number {
    return nums.reduce((acc, curr) => acc + curr, 0) % k;
};