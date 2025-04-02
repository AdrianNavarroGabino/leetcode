function canBeIncreasing(nums: number[]): boolean {
    const index = nums.findIndex((num, i) => i !== 0 && num <= nums[i - 1]);

    if (index === -1) {
        return true;
    }

    nums.splice(index > 1 && nums[index] <= nums[index - 2] ? index : index - 1, 1);
    return nums.findIndex((num, i) => i !== 0 && num <= nums[i - 1]) === -1;
};