function mergeArrays(nums1: number[][], nums2: number[][]): number[][] {
    let num1: number[] | undefined = nums1.shift();
    let num2: number[] | undefined = nums2.shift();
    const result = [] as number[][];

    while (nums1.length || nums2.length) {
        if (!num1 && num2) {
            result.push(num2);
            num2 = nums2.shift();
        } else if (!num2 && num1) {
            result.push(num1);
            num1 = nums1.shift();
        } else if(num1 && num2) {
            if (num1[0] === num2[0]) {
                result.push([num1[0], num1[1] + num2[1]]);
                num1 = nums1.shift();
                num2 = nums2.shift();
            } else if (num1[0] < num2[0]) {
                result.push(num1);
                num1 = nums1.shift();
            } else {
                result.push(num2);
                num2 = nums2.shift();
            }
        }
    }

    if (!num1 && num2) {
        result.push(num2);
    } else if (!num2 && num1) {
        result.push(num1);
    } else if(num1 && num2) {
        if (num1[0] === num2[0]) {
            result.push([num1[0], num1[1] + num2[1]]);
        } else if (num1[0] < num2[0]) {
            result.push(num1);
            result.push(num2);
        } else {
            result.push(num2);
            result.push(num1);
        }
    }

    return result;
};