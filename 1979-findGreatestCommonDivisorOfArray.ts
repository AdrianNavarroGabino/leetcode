function findGCD(nums: number[]): number {
    let lowest: number = Math.min(...nums);
    let highest: number = Math.max(...nums);

    while (lowest !== 0) {
        let temp = lowest;
        lowest = highest % lowest;
        highest = temp;
    }
    
    return highest;
};