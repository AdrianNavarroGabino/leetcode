function dominantIndex(nums: number[]): number {
    const numsAux = [...nums].sort((a, b) => b - a);

    if (numsAux[0] < numsAux[1] * 2) {
        return -1;
    }

    return nums.indexOf(numsAux[0]);
};