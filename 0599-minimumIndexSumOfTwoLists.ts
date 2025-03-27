function findRestaurant(list1: string[], list2: string[]): string[] {
    let indexSum = -1;
    let list = [] as string[];

    list1.forEach((word1, i) => {
        const j = list2.findIndex((word2) => word1 === word2);

        if (j !== -1) {
            if (indexSum === -1 || j + i <= indexSum) {
                if (j + i === indexSum) {
                    list.push(word1);
                } else {
                    indexSum = j + i;
                    list = [word1];
                }
            }
        }
    });

    return list;
};