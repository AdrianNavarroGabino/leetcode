function findContentChildren(g: number[], s: number[]): number {
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);

    let content = 0;
    let j = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] >= g[j]) {
            content++;
            j++;

            if (j === g.length) {
                return content;
            }
        }
    }

    return content;
};