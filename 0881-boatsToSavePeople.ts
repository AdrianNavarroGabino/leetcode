function numRescueBoats(people: number[], limit: number): number {
    people.sort((a, b) => a - b);
    let found: boolean = false;
    let numberOfBoats: number = 0;
    let i: number = 0;
    let j: number = people.length - 1;

    while (i < j) {
        found = false;

        while (!found) {
            if (people[j] + people[i] <= limit) {
                found = true;
                numberOfBoats++;
                j--;
            } else {
                j--;
                numberOfBoats++;
                if (i >= j) {
                    break;
                }
            }
        }
        i++;
    }

    if (!found || i === j) {
        numberOfBoats++;
    }

    return numberOfBoats;
};