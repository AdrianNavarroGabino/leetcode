function haveConflict(event1: string[], event2: string[]): boolean {
    const event1Aux = event1.map((time) => {
        const [hour, minute] = time.split(':');
        return +hour * 60 + +minute;
    });

    const event2Aux = event2.map((time) => {
        const [hour, minute] = time.split(':');
        return +hour * 60 + +minute;
    });

    return (event1Aux[0] >= event2Aux[0] && event1Aux[0] <= event2Aux[1]) ||
        (event1Aux[1] >= event2Aux[0] && event1Aux[1] <= event2Aux[1]) ||
        (event2Aux[0] >= event1Aux[0] && event2Aux[0] <= event1Aux[1]);
};
