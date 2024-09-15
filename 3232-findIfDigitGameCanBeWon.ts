function canAliceWin(nums: number[]): boolean {
    return nums
        .filter((n) => n < 10)
        .reduce((acc, curr) => acc + curr, 0) != nums
            .filter((n) => n >= 10)
            .reduce((acc, curr) => acc + curr, 0);
};