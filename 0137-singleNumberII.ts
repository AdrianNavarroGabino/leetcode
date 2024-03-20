function singleNumber(nums: number[]): number {
    let current: number | undefined = nums.shift();
    while (current !== undefined) {
        const index: number = nums.indexOf(current);
        if (index === -1) {
            return current;
        }
        const index2: number = nums.indexOf(current, index + 1);
        nums.splice(index2, 1);
        nums.splice(index, 1);
        current = nums.shift();
    }

    return 0;
};