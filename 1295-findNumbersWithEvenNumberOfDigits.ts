function findNumbers(nums: number[]): number {
    return nums
        .filter((n) => n.toString().length % 2 === 0)
        .length;
};