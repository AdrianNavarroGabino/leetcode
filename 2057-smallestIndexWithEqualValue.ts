function smallestEqual(nums: number[]): number {
    return nums.findIndex((num, i) => i % 10 === num);
};