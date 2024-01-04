function getParenthesis (open: number, close: number, str: string, result: string[]) {
    if (open > close){
        return;
    }

    if (open + close === 0){
        result.push(str);
        return;
    }

    if (open > 0) {
        getParenthesis(open - 1, close, str + '(', result);
    }
    if (close > 0) {
        getParenthesis(open, close - 1, str + ')', result);
    }
};

function generateParenthesis(n: number): string[] {
    const result: string[] = [];
    getParenthesis(n, n, '', result);
    return result;
};