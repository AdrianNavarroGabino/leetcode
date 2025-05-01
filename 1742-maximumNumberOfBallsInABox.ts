function countBalls(lowLimit: number, highLimit: number): number {
    const boxes = [] as number[];

    for (let i = lowLimit; i <= highLimit; i++) {
      const index = i.toString().split('').reduce((acc, curr) => acc + +curr, 0);
      boxes[index] = boxes[index] ? boxes[index] + 1 : 1;
    }

    return Math.max(...boxes.filter((num) => num));
};