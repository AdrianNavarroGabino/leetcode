function findSubstring(s: string, words: string[]): number[] {
    words.sort();
    const result: number[] = [];
    const wordLength = words[0].length;
    const arrTotalLength = words.length * wordLength;

    for (let i = 0; i < s.length - arrTotalLength + 1; i++) {
        if (words.includes(s.substring(i, i + wordLength))) {
            const candidateWord = s
                .substring(i, i + arrTotalLength)
                .match(new RegExp(`.{${wordLength}}`, 'g'))!
                .sort();
            
            if (candidateWord.join('') === words.join('')) {
                result.push(i);
            }
        }
    }
    return result;
};