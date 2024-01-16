function searchInsert(nums: number[], target: number): number {
    const position = nums.indexOf(target);

    return position !== -1 ? position : nums.filter((el) => el < target).length;
};