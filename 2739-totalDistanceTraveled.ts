function distanceTraveled(mainTank: number, additionalTank: number): number {
    let km = 0;

    while (mainTank > 0) {
        if (mainTank >= 5) {
            mainTank -= 5;
            km += 50
            if (additionalTank > 0) {
                additionalTank--;
                mainTank++;
            }
        } else {
            km += mainTank * 10;
            mainTank = 0;
        }
    }

    return km;
};