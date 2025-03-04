function triangleType(nums: number[]): string {
    nums.sort((a, b) => b - a);

    if (nums[1] + nums[2] <= nums[0]) {
        return 'none';
    }

    if (nums[2] !== nums[0]) {
        if (nums[1] !== nums[0] && nums[2] !== nums[1]) {
            return 'scalene';
        }

        return 'isosceles';
    }

    return 'equilateral';
};