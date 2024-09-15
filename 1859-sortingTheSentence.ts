function sortSentence(s: string): string {
    return s
        .split(' ')
        .sort((a, b) => +a.match(/\d+/)![0] - +b.match(/\d+/)![0])
        .map((w) => w.replace(/\d+/, ''))
        .join(' ');
};