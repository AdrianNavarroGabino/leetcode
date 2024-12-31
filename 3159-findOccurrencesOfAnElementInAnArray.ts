function occurrencesOfElement(nums: number[], queries: number[], x: number): number[] {
    const indexes: number[] = [];

    for (const index in nums) {
        if (nums[index] === x) {
            indexes.push(+index);
        }
    }

    return queries.map((q) => indexes.length >= q ? indexes[q - 1] : -1);
};