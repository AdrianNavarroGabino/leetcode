function triangularSum(nums: number[]): number {
    while (nums.length > 1) {
        nums = nums.reduce((acc, curr, i) => {
            if (i !== 0) {
                acc.push((curr + nums[i - 1]) % 10);
            }

            return acc;
        }, [] as number[]);
    }

    return nums[0];
};