function finalValueAfterOperations(operations: string[]): number {
    return operations.reduce((acc, curr) => acc + (curr.includes('++') ? 1 : -1), 0);
};