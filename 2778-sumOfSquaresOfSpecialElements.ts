function sumOfSquares(nums: number[]): number {
    return nums
        .reduce((acc, curr, i) => nums.length % (i + 1) ? acc : acc + (curr * curr), 0);
};