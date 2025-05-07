function findClosest(x: number, y: number, z: number): number {
    const distance1 = Math.abs(x - z);
    const distance2 = Math.abs(y - z);

    return distance1 < distance2 ? 1 : (distance1 > distance2 ? 2 : 0);
};