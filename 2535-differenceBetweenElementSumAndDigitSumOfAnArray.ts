function differenceOfSum(nums: number[]): number {
    const elementSum = nums.reduce((acc, curr) => acc + curr, 0);
    const digitSum = nums
        .reduce((acc, curr) => acc + curr
            .toString()
            .split('')
            .reduce((acc2, curr2) => acc2 + +curr2, 0), 0);
    
    return Math.abs(elementSum - digitSum);
};