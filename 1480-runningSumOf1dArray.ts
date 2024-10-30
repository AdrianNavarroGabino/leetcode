function runningSum(nums: number[]): number[] {
    const result: number[] = [nums[0]];

    for (let i = 1; i < nums.length; i++) {
        result.push(nums[i] + result[result.length - 1]);
    }

    return result;
};