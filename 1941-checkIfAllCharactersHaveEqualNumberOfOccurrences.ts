function areOccurrencesEqual(s: string): boolean {
    return Object.values(
        Array
            .from(s)
            .reduce((acc, curr) => {
                if (!acc[curr]) {
                    acc[curr] = 0;
                }

                acc[curr]++;
                return acc;
            }, {} as { [key: string]: number }))
            .every((n, _, arr) => n === arr[0]);
};