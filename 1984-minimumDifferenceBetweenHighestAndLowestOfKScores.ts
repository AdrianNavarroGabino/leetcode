function minimumDifference(nums: number[], k: number): number {
    let result = Math.max(...nums) - Math.min(...nums);
    if (nums.length < k) {
        return result;
    }

    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - k + 1; i++) {
        const candidate = nums[i + k - 1] - nums[i];

        if (candidate < result) {
            result = candidate;
        }
    }

    return result;
};