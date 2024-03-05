function merge(intervals: number[][]): number[][] {
    intervals.sort((a, b) => a[0] - b[0]);

    let i: number = 0;
    let j: number = 1;
    const result: number[][] = [intervals[i]];

    while (i < intervals.length && j < intervals.length) {
        if (intervals[j][0] >= result[result.length - 1][0] && intervals[j][0] <= result[result.length - 1][1]) {
            if (intervals[j][1] > result[result.length - 1][1]) {
                result[result.length - 1][1] = intervals[j][1];
            }
            j++;
        } else {
            i = j;
            result.push(intervals[i]);
        }
    }

    return result;
};