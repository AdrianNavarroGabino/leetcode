function maxWidthOfVerticalArea(points: number[][]): number {
    const width = [...new Set(points.map((point) => point[0]))].sort((a, b) => a - b);
    return Math.max(...width.map((w, i) => i === 0 ? 0 : w - width[i - 1]));
};