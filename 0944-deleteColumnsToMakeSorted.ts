function minDeletionSize(strs: string[]): number {
    let result: number = 0;

    for (let i = 0; i < strs[0].length; i++) {
        let current: number = strs[0].charCodeAt(i);

        for (let j = 1; j < strs.length; j++) {
            const candidate = strs[j].charCodeAt(i);
            if (candidate < current) {
                result++;
                break;
            }
            current = candidate;
        }
    }

    return result;
};