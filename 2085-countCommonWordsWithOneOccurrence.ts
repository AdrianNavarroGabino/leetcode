function countWords(words1: string[], words2: string[]): number {
    let result = 0;

    for (let i = 0; i < words1.length; i++) {
        const index2 = words2.indexOf(words1[i]);
        if (index2 !== -1) {
            const index1 = words1.lastIndexOf(words1[i]);
            const index1Bis = words1.indexOf(words1[i]);
            const index2Bis = words2.lastIndexOf(words1[i]);

            if (index1 === index1Bis && index2 === index2Bis) {
                result++;
            }
        }
    }

    return result;
};