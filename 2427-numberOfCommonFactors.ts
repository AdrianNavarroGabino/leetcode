function commonFactors(a: number, b: number): number {
    function getFactors(n: number): number[] {
        const factors: number[] = [];
        for (let i = 1; i <= n; i++) {
            if (n % i === 0) {
                factors.push(i);
            }
        }
        return factors;
    }

    return getFactors(a).filter(x => getFactors(b).includes(x)).length;
};