function findingUsersActiveMinutes(logs: number[][], k: number): number[] {
    const result = Array(k).fill(0);

    const mappedLogs: {[key: number]: Set<number>} = logs.reduce((acc, log) => {
        if (!acc[log[0]]) {
            acc[log[0]] = new Set<number>();
        }

        acc[log[0]].add(log[1]);
        return acc;
    }, {} as {[key: number]: Set<number>});

    for (const value of Object.values(mappedLogs)) {
        result[value.size - 1]++;
    }

    return result;
};