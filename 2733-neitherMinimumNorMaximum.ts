function findNonMinOrMax(nums: number[]): number {
    const minMax: number[] = [Math.max(...nums), Math.min(...nums)];

    return nums.find((n) => !minMax.includes(n)) || -1;
};