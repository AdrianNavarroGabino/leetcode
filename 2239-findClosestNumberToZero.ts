function findClosestNumber(nums: number[]): number {
    if (nums.includes(0)) {
        return 0;
    }

    nums.sort((a, b) => a - b);
    return nums.find((num, i) => (nums[i + 1] > 0 && -num < nums[i + 1])) || nums[nums.length - 1];
};