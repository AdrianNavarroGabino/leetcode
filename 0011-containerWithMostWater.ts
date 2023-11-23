const maxArea = (height: number[]): number => height.reduce((acc, curr, i) => {
    let tempResult: number = 0;
    if((height.length - 1 - i) * curr < acc) {
        return acc;
    }
    for(let j = i + 1; j < height.length; j++) {
        const area: number = (j - i) * Math.min(curr, height[j]);
        if(area > tempResult) {
            tempResult = area;
        }
    }
    return tempResult > acc ? tempResult : acc;
}, 0);