const convert = (s: string, numRows: number): string => {
    if(numRows < 2) {
        return s;
    }
    
    const arr: Array<string> = s.match(new RegExp(`.{1,${numRows * 2 - 2}}`, 'g')) || [''];
    return arr.reduce((acc, curr) => {
        for(let i = 0; i < numRows; i++) {
            acc[i] += (curr[i] || '') + (i !== 0 && i !== numRows - 1 ? (curr[(numRows - 1) * 2 - i] || '') : '');
        }
        return acc;
    }, Array(numRows).fill('')).join('');
};