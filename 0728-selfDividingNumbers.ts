function selfDividingNumbers(left: number, right: number): number[] {
    const result: number[] = [];

    for (let i = left; i <= right; i++) {
        const formattedCandidate: string[] = i.toString().split('');

        if (!formattedCandidate.includes('0') && formattedCandidate.every((d) => i % +d === 0)) {
            result.push(i);
        }
    }

    return result;
};