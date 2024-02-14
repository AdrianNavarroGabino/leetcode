function decodeString(s: string): string {
    while (s.indexOf('[') !== -1) {
        const match: RegExpMatchArray | null = s.match(/(\d+)\[([a-z]+)\]/);
        if (match?.length) {
            s = s.replace(`${match[1]}[${match[2]}]`,
                match[2].repeat(+match[1]));
        }
    }

    return s;
};