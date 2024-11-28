function distinctDifferenceArray(nums: number[]): number[] {
    const diffPrev: Set<number> = new Set();
    const diffNext: Set<number> = new Set(nums);
    const result: number[] = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums.indexOf(nums[i], i + 1) === -1) {
            diffNext.delete(nums[i]);
        }

        diffPrev.add(nums[i]);

        result.push(diffPrev.size - diffNext.size);
    }

    return result;
};