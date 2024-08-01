function separateDigits(nums: number[]): number[] {
    return nums
        .map((num) => num.toString().split('').map((n) => +n))
        .flat();
};