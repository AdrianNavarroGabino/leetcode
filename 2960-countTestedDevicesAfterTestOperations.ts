function countTestedDevices(batteryPercentages: number[]): number {
    let testedDevices: number = 0;

    for (let i = 0; i < batteryPercentages.length; i++) {
        if (batteryPercentages[i] - testedDevices > 0) {
            testedDevices++;
        }
    }

    return testedDevices;
};