function isSumEqual(firstWord: string, secondWord: string, targetWord: string): boolean {
    const val1: number = +firstWord.split('').reduce((acc, curr) => acc + (curr.charCodeAt(0) - 97).toString(), '');
    const val2: number = +secondWord.split('').reduce((acc, curr) => acc + (curr.charCodeAt(0) - 97).toString(), '');
    const targetVal: number = +targetWord.split('').reduce((acc, curr) => acc + (curr.charCodeAt(0) - 97).toString(), '');

    return val1 + val2 === targetVal;
};