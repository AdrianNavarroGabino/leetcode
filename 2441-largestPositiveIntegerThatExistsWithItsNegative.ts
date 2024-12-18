function findMaxK(nums: number[]): number {
    nums.sort((a, b) => Math.abs(b) - Math.abs(a));

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === -nums[i + 1]) {
            return Math.abs(nums[i]);
        }
    }

    return -1;
};