function getSumAbsoluteDifferences(nums: number[]): number[] {
  let totalSum1 = nums.reduce((acc, curr) => acc + curr, 0);
  let totalSum2 = 0;
  const result = [] as number[];

  for (let i = 0; i < nums.length; i++) {
    totalSum1 -= nums[i];
    result.push(nums[i] * i - totalSum2 + totalSum1 - nums[i] * (nums.length - i - 1));
    totalSum2 += nums[i];
  }

  return result;
};