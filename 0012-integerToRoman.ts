const intToRoman = (num: number): string => Array.from(num.toString()).map((d, i, arr) => {
    const digit: number = +d;
    switch(arr.length - i) {
        case 4:
            return 'M'.repeat(digit);
        case 3:
            if (digit === 9) {
                return 'CM';
            } else if (digit > 4) {
                return `D${'C'.repeat(digit - 5)}`;
            } else if (digit === 4) {
                return 'CD';
            } else {
                return 'C'.repeat(digit);
            }
        case 2:
            if (digit === 9) {
                return 'XC';
            } else if (digit > 4) {
                return `L${'X'.repeat(digit - 5)}`;
            } else if (digit === 4) {
                return 'XL';
            } else {
                return 'X'.repeat(digit);
            }
        case 1:
            if (digit === 9) {
                return 'IX';
            } else if (digit > 4) {
                return `V${'I'.repeat(digit - 5)}`;
            } else if (digit === 4) {
                return 'IV';
            } else {
                return 'I'.repeat(digit);
            }
    }
}).join('');