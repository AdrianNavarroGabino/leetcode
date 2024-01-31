function isSubsequence(s: string, t: string): boolean {
    let index: number = 0;

    return ![...s].some((el) => {
        index = t.indexOf(el, index) + 1;
        return !index;
    })
};