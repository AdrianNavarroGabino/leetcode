function countCompleteDayPairs(hours: number[]): number {
    let result: number = 0;

    for (let i = 0; i < hours.length - 1; i++) {
        for (let j = i + 1; j < hours.length; j++) {
            result += (hours[i] + hours[j]) % 24 ? 0 : 1;
        }
    }

    return result;
};