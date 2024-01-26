function productExceptSelf(nums: number[]): number[] {
    const numberOfZeros: number = nums.filter((el) => el === 0).length;
    if(numberOfZeros > 1) {
        return nums.map(() => 0);
    }

    const totalProduct = nums.reduce((acc, curr) => acc * (curr === 0 ? 1 : curr), 1);

    return nums.map((el) => el === 0 ? totalProduct : (numberOfZeros ? 0 : totalProduct / el));
};