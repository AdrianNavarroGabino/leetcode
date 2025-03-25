const powerResult = [
    1,       3,       9,
   27,      81,     243,
  729,    2187,    6561,
19683,   59049,  177147,
531441, 1594323, 4782969,
14348907
];

function checkPowersOfThree(n: number): boolean {
    let lastIndex = powerResult.length + 1;
    while (n > 0) {
        const index = (powerResult.findIndex((num) => num > n) || powerResult.length) - 1;

        if (lastIndex <= index) {
            return false;
        }

        lastIndex = index;

        n -= powerResult[index];
    }

    return n === 0;
};