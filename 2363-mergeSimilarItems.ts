function mergeSimilarItems(items1: number[][], items2: number[][]): number[][] {
    return Object.values([...items1, ...items2].reduce((acc, curr) => {
        if (!acc[curr[0]]) {
            acc[curr[0]] = [curr[0], 0];
        }

        acc[curr[0]][1] += curr[1];

        return acc;
    }, {} as {[key: number]: number[]}));
};