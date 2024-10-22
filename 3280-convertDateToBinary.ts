function convertDateToBinary(date: string): string {
    return date.split('-').map((n) => (+n).toString(2)).join('-');
};