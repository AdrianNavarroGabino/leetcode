function check(nums: number[]): boolean {
    nums = nums.filter((num, i) => i === nums.length - 1 || num !== nums[i + 1]);
    const maxIndexLast = nums.lastIndexOf(Math.max(...nums));
    const min = Math.min(...nums);
    if (maxIndexLast === nums.length - 1 && nums[0] === min) {
        const numsAux = [...nums];
        numsAux.sort((a: number, b: number) => a - b);
        return JSON.stringify(numsAux) === JSON.stringify(nums);
    }

    const maxIndex = nums.indexOf(Math.max(...nums));

    if (nums[maxIndex + 1] !== min) {
        return false;
    }

    const numsAux1 = [...nums].sort((a, b) => a - b);
    const numsAux2 = [...nums].slice(maxIndex + 1).concat([...nums].slice(0, maxIndex + 1));

    return JSON.stringify(numsAux1) === JSON.stringify(numsAux2);
};