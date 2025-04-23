function sumOfEncryptedInt(nums: number[]): number {
    return nums
        .reduce((acc, curr) => {
            const numAux = curr
                .toString()
                .split('')
                .map((num) => +num);
            const max = Math.max(...numAux);
            
            return acc + +max.toString().repeat(numAux.length);
        }, 0);
};