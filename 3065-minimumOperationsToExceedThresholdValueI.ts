function minOperations(nums: number[], k: number): number {
    return nums.filter((n) => n < k).length;
};