function sumOfUnique(nums: number[]): number {
    if (nums.length === 1) {
        return nums[0];
    }
    
    nums.sort((a, b) => a - b);
    let result: number = nums[0] === nums[1] ? 0 : nums[0];

    for (let i = 1; i < nums.length - 1; i++) {
        if (nums[i] !== nums[i - 1] && nums[i] !== nums[i + 1]) {
            result += nums[i];
        }
    }

    if (nums[nums.length - 1] !== nums[nums.length - 2]) {
        result += nums[nums.length - 1];
    }

    return result;
};