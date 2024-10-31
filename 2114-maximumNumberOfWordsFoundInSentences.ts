function mostWordsFound(sentences: string[]): number {
    return Math.max(...sentences.map((sentence) => sentence.split(' ').length));
};