function numJewelsInStones(jewels: string, stones: string): number {
    const jewelsAux = jewels.split('').reduce((acc, curr) => {
        acc[curr] = 1;
        return acc;
    }, {} as {[key: string]: number});

    return stones.split('').reduce((acc, curr) => acc + (jewelsAux[curr] || 0), 0);
};