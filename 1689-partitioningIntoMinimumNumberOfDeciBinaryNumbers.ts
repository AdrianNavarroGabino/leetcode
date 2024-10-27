function minPartitions(n: string): number {
    return +n.split('').sort((a, b) => +b - +a)[0];
};