function transformArray(nums: number[]): number[] {
    const even = nums.filter((num) => num % 2 === 0).length;
    const odd = nums.length - even;

    return [...Array(even).fill(0), ...Array(odd).fill(1)];
};