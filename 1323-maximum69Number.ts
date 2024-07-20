function maximum69Number (num: number): number {
    const arr: string[] = Array.from(num.toString());
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '6') {
            arr[i] = '9';
            break;
        }
    }

    return parseInt(arr.join(''));
};