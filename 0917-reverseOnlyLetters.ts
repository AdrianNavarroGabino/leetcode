function reverseOnlyLetters(s: string): string {
    const groups: string[] = s.match(/[a-zA-Z]+/g) || [];
    const separators: string[] = s.match(/[^a-zA-Z]+/g) || [];
    const reverseLetters: string = groups.map((g) => g.split('').reverse().join('')).reverse().join('');
    
    let result: string = '';
    if (s.startsWith(separators[0])) {
        result = separators.shift() || '';
    }
    let index: number = 0;

    for (let i = 0; i < groups.length; i++) {
        const length = groups[i].length;
        result += reverseLetters.substring(index, index + length) + (i < groups.length - 1 ? separators[i] : '');
        index += length;
    }

    if (separators.length > groups.length - 1) {
        result += separators.slice(groups.length - 1).join('');
    }

    return result;
};