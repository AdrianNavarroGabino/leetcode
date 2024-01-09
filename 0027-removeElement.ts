function removeElement(nums: number[], val: number): number {
    nums.sort((a, b) => a === val ? 1 : -1);
    const result: number = nums.indexOf(val);
    return result !== -1 ? result : nums.length;
};