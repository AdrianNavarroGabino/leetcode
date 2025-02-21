function lemonadeChange(bills: number[]): boolean {
    const change = [0, 0, 0];
    for (let i = 0; i < bills.length; i++) {
        switch (bills[i]) {
            case 5:
                bills[i] -= 5;
                change[0]++;
                break;
            case 10:
                if (change[0] > 0) {
                    bills[i] -= 5;
                    change[0]--;
                    change[1]++;
                    break;
                }
                return false;
            case 20:
                if (change[0] > 0 && change[1] > 0) {
                    bills[i] -= 5;
                    change[0]--;
                    change[1]--;
                    change[2]++;
                    break;
                } else if (change[0] >= 3) {
                    bills[i] -= 5;
                    change[0] -= 3;
                    change[2]++;
                    break;
                }
                return false;
        }
    }

    return true;
};