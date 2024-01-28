function increasingTriplet(nums: number[]): boolean {
    if([...new Set(nums)].length < 3) {
        return false;
    }

    return nums
        .some((e1, i) => nums.slice(i + 1)
            .some((e2, j) => e2 > e1 && nums.slice(i + j + 2)
                .some((e3) => e3 > e2)));
};