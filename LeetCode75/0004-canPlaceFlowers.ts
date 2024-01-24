function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    if (flowerbed.length < 2) {
        return n <= flowerbed.length - flowerbed[0];
    }

    const flowerbed2 = [...flowerbed];
    
    for (let i = 0; i < flowerbed2.length; i++) {
        if ((i === 0 && flowerbed2[i + 1] === 0) ||
            (i === flowerbed2.length - 1 && flowerbed2[i - 1] === 0) ||
            (flowerbed2[i + 1] === 0 && flowerbed2[i - 1] === 0)) {
                flowerbed2[i] = 1;
            }
    }
    
    return flowerbed.reduce((acc, el, i) => acc + (el === flowerbed2[i] ? 0 : 1), 0) >= n;
};