function minElement(nums: number[]): number {
    return Math.min(
        ...nums.map((num) => num
            .toString()
            .split('')
            .reduce((acc, curr) => acc + +curr, 0)
        )
    );
};