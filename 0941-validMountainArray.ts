function validMountainArray(arr: number[]): boolean {
    if (arr.length < 3 || arr[0] > arr[1]) {
        return false;
    }

    let up = true;
    let currentValue = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (up) {
            if (arr[i] < currentValue) {
                up = false;
                currentValue = arr[i];
            } else if (arr[i] > currentValue) {
                currentValue = arr[i];
            } else {
                return false;
            }
        } else {
            if (arr[i] < currentValue) {
                currentValue = arr[i];
            } else {
                return false;
            }
        }
    }

    return !up;
};