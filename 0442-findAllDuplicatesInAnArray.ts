function findDuplicates(nums: number[]): number[] {
    return nums.filter((num, i) => nums.indexOf(num, i + 1) !== -1);
};