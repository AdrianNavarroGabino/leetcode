function isValid(s: string): boolean {
    let nextClose: Array<string> = [];
    let valid : boolean = true;

    [...s].forEach((l) => {
        switch(l) {
            case '(':
                nextClose.unshift(')');
                break;
            case '[':
                nextClose.unshift(']');
                break;
            case '{':
                nextClose.unshift('}');
                break;
            default:
                if(nextClose.shift() !== l) {
                    valid = false;
                }
                break;
        }
    });

    return valid && !nextClose.length;
};