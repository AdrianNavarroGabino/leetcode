function isHappy(n: number): boolean {
    let aux: number;

    while (n > 4) {
        aux = n.toString().split('').reduce((acc, curr) => acc + +curr * +curr, 0);
        
        if (aux !== n) {
            n = aux;
        } else {
            break;
        }
    }

    return n === 1;
};