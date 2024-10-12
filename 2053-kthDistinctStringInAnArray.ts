function kthDistinct(arr: string[], k: number): string {
    const filteredArr: string[] = arr.filter((s, i) => arr.indexOf(s) === arr.lastIndexOf(s));

    return filteredArr.length >= k ? filteredArr[k - 1] : ''
};