function kLengthApart(nums: number[], k: number): boolean {
    return new RegExp(`^0*(?:10{${k},})*(?:10*)?$`).test(nums.join(''));
};