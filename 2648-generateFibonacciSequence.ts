function* fibGenerator(): Generator<number, any, number> {
    let current: number = 1;
    let prev: number = 0;
    let aux: number;

    yield 0;
    yield 1;

    while (true) {
        aux = current;
        current += prev;
        prev = aux;

        yield current;
    }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */