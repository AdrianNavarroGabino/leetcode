function distinctAverages(nums: number[]): number {
    nums.sort((a, b) => a - b);
    const averages = new Set() as Set<number>;

    while (nums.length) {
        const highest = nums.pop() || 0;
        const lowest = nums.shift() || 0;
        averages.add((highest + lowest) / 2);
    }

    return averages.size;
};