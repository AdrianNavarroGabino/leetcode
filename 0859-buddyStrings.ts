function buddyStrings(s: string, goal: string): boolean {
    if (s.length !== goal.length) {
        return false;
    }

    if (s === goal) {
        for (let i = 0; i < s.length - 1; i++) {
            if (s.lastIndexOf(s[i]) !== i) {
                return true;
            }
        }

        return false;
    }

    const differentLettersOriginal: string[] = [];
    const differentLettersGoal: string[] = [];

    for (let i = 0; i < goal.length; i++) {
        if (s[i] !== goal[i]) {
            differentLettersOriginal.push(s[i]);
            differentLettersGoal.push(goal[i]);

            if (differentLettersGoal.length > 2) {
                return false;
            }
        }
    }

    return differentLettersGoal[0] === differentLettersOriginal[1] &&
        differentLettersGoal[1] === differentLettersOriginal[0];
};