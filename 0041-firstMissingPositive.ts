function firstMissingPositive(nums: number[]): number {
    nums = [...new Set(nums.filter((el) => el > 0))].sort((a, b) => a - b);
    const min: number = nums[0];

    if (!nums.length || min > 1) {
        return 1
    }

    const max: number = nums[nums.length - 1];

    if (max === nums.length) {
        return max + 1;
    }

    for(let i = 1; i <= nums.length; i++) {
        if (nums[i - 1] !== i) {
            return i;
        }
    }

    return max + 1;
};

