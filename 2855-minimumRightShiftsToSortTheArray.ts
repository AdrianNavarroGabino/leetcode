function minimumRightShifts(nums: number[]): number {
    const disordered = nums.filter((num, i) => i !== 0 ? num < nums[i - 1] : num < nums[nums.length - 1]);

    if (disordered.length === 0) {
        return 0;
    }
    if (disordered.length > 1) {
        return -1;
    }

    const index = nums.indexOf(disordered[0]);
    return index === 0 ? 0 : nums.length - index;
};