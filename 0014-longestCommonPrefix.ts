const longestCommonPrefix = (strs: string[]): string => {
    const shortest: string = strs.sort((a, b) => a.length - b.length).shift() || '';

    for(let i = shortest.length; i > 0; i--) {
        const candidate: string = shortest.substring(0, i);
        if(strs.every((w) => w.startsWith(candidate))) {
            return candidate;
        }
    }

    return '';
};