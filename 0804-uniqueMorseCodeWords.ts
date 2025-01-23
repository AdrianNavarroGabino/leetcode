const dict: {[key: string]: string} = {
    'a': '.-',
    'b': '-...',
    'c': '-.-.',
    'd': '-..',
    'e': '.',
    'f': '..-.',
    'g': '--.',
    'h': '....',
    'i': '..',
    'j': '.---',
    'k': '-.-',
    'l': '.-..',
    'm': '--',
    'n': '-.',
    'o': '---',
    'p': '.--.',
    'q': '--.-',
    'r': '.-.',
    's': '...',
    't': '-',
    'u': '..-',
    'v': '...-',
    'w': '.--',
    'x': '-..-',
    'y': '-.--',
    'z': '--..'
}

function uniqueMorseRepresentations(words: string[]): number {
    const result = new Set<string>();

    for (let i = 0; i < words.length; i++) {
        let aux: string = '';

        for (let j = 0; j < words[i].length; j++) {
            aux += dict[words[i][j]];
        }

        result.add(aux);
    }

    return result.size;
};