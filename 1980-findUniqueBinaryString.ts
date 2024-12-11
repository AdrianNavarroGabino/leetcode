function findDifferentBinaryString(nums: string[]): string {
    const length: number = nums[0].length;

    for (let i = parseInt('1' + '0'.repeat(length - 1), 2); i <= parseInt('1'.repeat(length), 2); i++) {
        const bin: string = i.toString(2);

        if (!nums.includes(bin)) {
            return bin;
        }
    }

    return '0'.repeat(length);
};