function largestAltitude(gain: number[]): number {
    let max: number = 0;
    let current: number = 0;

    for (let i = 0; i < gain.length; i++) {
        current += gain[i];
        max = current > max ? current : max;
    }

    return max;
};