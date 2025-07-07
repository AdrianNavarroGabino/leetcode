function countHillValley(nums: number[]): number {
  let result = 0;
  nums = nums.filter((num, i) => i === 0 || num !== nums[i - 1]);

  for (let i = 1; i < nums.length - 1; i++) {
    if ((nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) || (nums[i] < nums[i - 1] && nums[i] < nums[i + 1])) {
      result++;
    }
  }

  return result;
};