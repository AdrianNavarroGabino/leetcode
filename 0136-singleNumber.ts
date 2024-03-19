function singleNumber(nums: number[]): number {
    let current: number | undefined = nums.shift();
    while (current !== undefined) {
        const index = nums.indexOf(current);
        if (index === -1) {
            return current;
        }
        nums.splice(index, 1);
        current = nums.shift();
    }

    return 0;
};