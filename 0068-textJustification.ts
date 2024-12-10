function fullJustify(words: string[], maxWidth: number): string[] {
    const lines: string[][] = [[]];
    const result: string[] = [];
    const lengths: number[] = [];
    let length: number = 0;

    for (const word of words) {
        if (word.length + length + lines[lines.length - 1].length <= maxWidth) {
            length += word.length;
            lines[lines.length - 1].push(word);
        } else {
            lengths.push(length);
            length = word.length;
            lines.push([word]);
        }
    }

    lengths.push(length);

    for (let i = 0; i < lines.length; i++) {
        if (lines[i].length === 1) {
            result.push(lines[i][0].padEnd(maxWidth, ' '));
        } else if (i === lines.length - 1) {
            result.push(lines[i].join(' ').padEnd(maxWidth, ' '));
        } else {
            const spaces = Math.floor((maxWidth - lengths[i]) / (lines[i].length - 1));
            const extraSpaces = (maxWidth - lengths[i]) % (lines[i].length - 1);
            result.push(
                lines[i]
                    .map((word, j) => lines[i].length === j + 1 ?
                        word :
                        word + (j < extraSpaces ? ' '.repeat(spaces + 1) : ' '.repeat(spaces)))
                    .join('')
                );
        }
    }

    return result;
};