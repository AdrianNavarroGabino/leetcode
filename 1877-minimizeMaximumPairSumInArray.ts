function minPairSum(nums: number[]): number {
    nums.sort((a, b) => a - b);
    let result: number = 0;

    for (let i = 0; i < nums.length / 2; i++) {
        const candidate: number = nums[i] + nums[nums.length - 1 - i];

        result = result > candidate ? result : candidate;
    }

    return result;
};