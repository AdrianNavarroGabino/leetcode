/**
 Do not return anything, modify nums1 in-place instead.
 */
 function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let count: number = 0;

    for (let i = 0; i < n; i++) {
        nums1.pop();
    }

    while (count < nums1.length) {
        while (nums2.length && nums2[0] < nums1[count]) {
            nums1.splice(count, 0, nums2.shift()!);
            count++;
        }
        count++;
    }

    while (nums2.length) {
        nums1.push(nums2.shift()!);
    }
 };