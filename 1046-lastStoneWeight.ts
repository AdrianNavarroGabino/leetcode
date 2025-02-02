function lastStoneWeight(stones: number[]): number {
    stones.sort((a, b) => b - a);

    while (stones.length > 1) {
        const a = stones.shift() || 0;
        const b = stones.shift() || 0;

        if (a === b) {
            continue;
        }

        const result = a - b;
        let found = false;

        for (let i = 0; i < stones.length; i++) {
            if (stones[i] <= result) {
                found = true;
                stones.splice(i, 0, result);
                break;
            }
        }

        if (!found) {
            stones.push(result);
        }
    }

    return stones[0] || 0;
};