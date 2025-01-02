function appendCharacters(s: string, t: string): number {
    let maxLength: number = 0;
    let lastIndex: number = -1;

    for (let i = 0; i < t.length; i++) {
        lastIndex = s.indexOf(t[i], lastIndex + 1);

        if (lastIndex === -1) {
            break;
        }

        maxLength++;
    }

    return t.length - maxLength;
};