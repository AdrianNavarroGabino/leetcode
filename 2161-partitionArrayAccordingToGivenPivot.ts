function pivotArray(nums: number[], pivot: number): number[] {
    const greater: number[] = nums.filter((n) => n > pivot);
    const lower: number[] = nums.filter((n) => n < pivot);

    return [
        ...lower,
        ...Array.from({length: nums.length - greater.length - lower.length}, () => pivot),
        ...greater
    ];
};