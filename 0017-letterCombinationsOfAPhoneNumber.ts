const combinations = [
    [],
    [],
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i'],
    ['j', 'k', 'l'],
    ['m', 'n', 'o'],
    ['p', 'q', 'r', 's'],
    ['t', 'u', 'v'],
    ['w', 'x', 'y', 'z']
];

const letterCombinations = (digits: string): string[] => {
    const result: string[] = [] as string[];
    const letters = Array.from(digits).map((el) => combinations[+el]);
    const length = letters.reduce((acc, curr) => acc * curr.length, 1);

    if(letters[3]) {
        for(let i = 0; i < letters[0].length; i++) {
            for(let j = 0; j < letters[1].length; j++) {
                for(let k = 0; k < letters[2].length; k++) {
                    for(let l = 0; l < letters[3].length; l++) {
                        result.push(letters[0][i] + letters[1][j] + letters[2][k] + letters[3][l]);
                    }
                }
            }
        }
    } else if (letters[2]) {
        for(let i = 0; i < letters[0].length; i++) {
            for(let j = 0; j < letters[1].length; j++) {
                for(let k = 0; k < letters[2].length; k++) {
                    result.push(letters[0][i] + letters[1][j] + letters[2][k]);
                }
            }
        }
    } else if (letters[1]) {
        for(let i = 0; i < letters[0].length; i++) {
            for(let j = 0; j < letters[1].length; j++) {
                result.push(letters[0][i] + letters[1][j]);
            }
        }
    } else if (letters[0]) {
        for(let i = 0; i < letters[0].length; i++) {
            result.push(letters[0][i]);
        }
    }
    
    return result;
};