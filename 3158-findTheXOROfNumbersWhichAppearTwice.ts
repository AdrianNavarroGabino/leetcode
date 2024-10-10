function duplicateNumbersXOR(nums: number[]): number {
    return nums
        .filter((n, i) => nums.indexOf(n, i + 1) !== -1)
        .reduce((acc, curr) => acc ^ curr, 0);
};