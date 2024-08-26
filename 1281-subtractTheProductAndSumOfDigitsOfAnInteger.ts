function subtractProductAndSum(n: number): number {
    const digits: number[] = Array.from(n.toString()).map((d) => +d);

    return digits.reduce((acc, curr) => acc * curr, 1) - digits.reduce((acc, curr) => acc + curr, 0);
};