function maximumCount(nums: number[]): number {
    nums = nums.filter((num) => num);
    const index = nums.findIndex((num) => num > 0);

    if (index === -1) {
        return nums.length;
    }

    const countPos = nums.length - index;
    return countPos > index ? countPos : index;
};