function maxFrequencyElements(nums: number[]): number {
    const aux: number[] = nums.reduce((acc, curr) => {
        if (!acc[curr]) {
            acc[curr] = 1;
        } else {
            acc[curr]++;
        }

        return acc;
    }, [] as number[]);
    
    aux.sort((a, b) => b - a);

    return aux.filter((n) => n === aux[0]).length * aux[0];
};