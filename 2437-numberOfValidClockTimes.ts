function countTime(time: string): number {
    let countHours = 0;
    let countMinutes = 0;

    if (time[0] === '?') {
        if (time[1] === '?') {
            countHours = 24;
        } else if (+time[1] > 3) {
            countHours = 2;
        } else {
            countHours = 3;
        }
    } else if (time[1] === '?') {
        if (time[0] === '2') {
            countHours = 4;
        } else {
            countHours = 10;
        }
    }

    if (time[3] === '?') {
        if (time[4] === '?') {
            countMinutes = 60;
        } else {
            countMinutes = 6;
        }
    } else if (time[4] === '?') {
        countMinutes = 10;
    }

    if (countHours + countMinutes === 0) {
        return 1;
    }

    if (countHours === 0) {
        return countMinutes;
    }

    if (countMinutes === 0) {
        return countHours;
    }

    return countHours * countMinutes;
};