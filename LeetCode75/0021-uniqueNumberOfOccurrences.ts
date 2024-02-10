function uniqueOccurrences(arr: number[]): boolean {
    let result: { [key: number]: number } = {};

    arr.forEach((el) => {
        if(!result[el]) {
            result[el] = 0;
        }
        result[el]++;
    });

    return [...new Set(Object.values(result))].length === Object.values(result).length;
};