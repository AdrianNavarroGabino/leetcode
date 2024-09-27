function decodeMessage(key: string, message: string): string {
    key = key.replace(/ /g, '');
    key = Array.from(key).filter((l, i) => key.indexOf(l) === i).join('');
    
    return Array
        .from(
            message,
            (l) => l === ' ' ? l : String.fromCharCode(key.indexOf(l) + 97)
        )
        .join('');
};