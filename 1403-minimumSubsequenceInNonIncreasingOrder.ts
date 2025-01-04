function minSubsequence(nums: number[]): number[] {
    nums.sort((a, b) => b - a);

    const target: number = nums.reduce((acc, curr) => acc + curr, 0) / 2;
    let partial: number = 0;
    const result: number[] = [];

    for (let i = 0; i < nums.length; i++) {
        result.push(nums[i]);
        partial += nums[i];

        if (partial > target) {
            return result;
        }
    }

    return result;
};