function asteroidCollision(asteroids: number[]): number[] {
    let res: number[] = [];
    let hasChanged: boolean = true;

    while (hasChanged) {
        hasChanged = false;
        res = [];

        if(asteroids.length === 1) {
            return asteroids;
        }

        for (let i = 0; i < asteroids.length - 1; i++) {
            if (asteroids[i] * asteroids[i + 1] > 0 || asteroids[i] < 0) {
                res.push(asteroids[i]);
                if(i === asteroids.length - 2) {
                    res.push(asteroids[i + 1]);
                }
            } else {
                if (Math.abs(asteroids[i]) > Math.abs(asteroids[i + 1])) {
                    hasChanged = true;
                    res.push(asteroids[i]);
                } else if (Math.abs(asteroids[i]) < Math.abs(asteroids[i + 1])) {
                    hasChanged = true;
                    res.push(asteroids[i + 1]);
                } else {
                    hasChanged = true;
                }
                i++;
                if(i === asteroids.length - 2) {
                    res.push(asteroids[i + 1]);
                }
            }
        }

        asteroids = [...res];
    }

    return res;
};