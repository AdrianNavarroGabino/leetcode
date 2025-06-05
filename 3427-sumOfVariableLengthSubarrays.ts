function subarraySum(nums: number[]): number {
    let result = 0;

    for (let i = 0; i < nums.length; i++) {
      result += nums
        .slice(Math.max(0, i - nums[i]), i + 1)
        .reduce((acc, curr) => acc + curr, 0);
    }

    return result;
};