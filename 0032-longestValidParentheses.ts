function longestValidParentheses(s: string): number {
    let open: number = 0;
    let closed: number = 0;
    let max: number = 0;
    s = s.substring(s.indexOf('('));
    
    while (s.length > max) {
        for (let i = 0; i < s.length; i++) {
            if (s[i] === '(') {
                open++;
            } else {
                closed++;
            }

            if (open === closed) {
                max = open + closed > max ? open + closed : max;
            } else if (closed > open) {
                open = 0;
                closed = 0;
            }
        }

        open = 0;
        closed = 0;
        const nextIndex: number = s.indexOf('(', 1);
        s = nextIndex === -1 ? '' : s.substring(nextIndex);
    }

    return max;
};