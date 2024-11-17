function countGoodRectangles(rectangles: number[][]): number {
    return rectangles
        .map((rectangle) => Math.min(...rectangle))
        .filter((squareSide, _, squares) => squareSide === Math.max(...squares))
        .length;
};