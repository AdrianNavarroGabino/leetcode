function smallerNumbersThanCurrent(nums: number[]): number[] {
    return nums.map((n) => nums.filter((m) => m < n).length);
};