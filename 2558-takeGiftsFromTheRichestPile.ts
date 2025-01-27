function pickGifts(gifts: number[], k: number): number {
    gifts.sort((a, b) => b - a);

    for (let i = 0; i < k; i++) {
        gifts[0] = Math.floor(Math.sqrt(gifts[0]));
        
        let index = 0;
        const candidate: number = gifts.shift() || 0;

        while (candidate < gifts[index]) {
            index++;
        }

        gifts.splice(index, 0, candidate);
    }

    return gifts.reduce((acc, curr) => acc + curr, 0);
};