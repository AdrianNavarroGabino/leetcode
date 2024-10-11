function maximizeSum(nums: number[], k: number): number {
    const max: number = Math.max(...nums);

    return ((max + k) * (max + k - 1) - max * (max - 1)) / 2;
};