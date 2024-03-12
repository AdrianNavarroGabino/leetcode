function groupAnagrams(strs: string[]): string[][] {
    return Object.values(strs.reduce((acc, curr) => {
        const key: string = curr.split('').sort().join('');
        if (!acc[key]) {
            acc[key] = [];
        }

        acc[key].push(curr);

        return acc;
    }, {} as {[key: string]: string[]}));
};