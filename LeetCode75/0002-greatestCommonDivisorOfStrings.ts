function gcdOfStrings(str1: string, str2: string): string {
    let result = '';
    const [longest, shortest] = [str1, str2].sort((a, b) => b.length - a.length);
    
    for (let i = 0; i < shortest.length; i++) {
        const repeat = shortest.substring(0, i + 1);

        if (shortest.match(new RegExp(`^(${repeat})+$`)) &&
            longest.match(new RegExp(`^(${repeat})+$`))) {
                result = repeat;
            }
    }

    return result;
};

console.log(gcdOfStrings('ABCABC', 'ABC'));