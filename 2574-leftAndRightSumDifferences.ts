function leftRightDifference(nums: number[]): number[] {
    if (nums.length === 1) {
        return [0];
    }

    const left: number[] = [];
    const right: number[] = [];
    const totalSum: number = nums.reduce((acc, curr) => acc + curr, 0);
    let currentLeft: number = totalSum;
    let currentRight: number = totalSum;

    for (let i = 0; i < nums.length; i++) {
        currentLeft -= nums[nums.length - i - 1];
        currentRight -= nums[i];

        left.unshift(currentLeft);
        right.push(currentRight);
    }

    return left.map((l, i) => Math.abs(l - right[i]));
};