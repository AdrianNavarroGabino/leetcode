function missingNumber(nums: number[]): number {
    const result: boolean[] = Array(nums.length + 1).fill(false);

    for (let n of nums) {
        result[n] = true;
    }

    return result.findIndex((n) => !n);
};