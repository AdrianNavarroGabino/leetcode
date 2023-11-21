const findMedianSortedArrays = (nums1: number[], nums2: number[]): number => {
    const totalLength = nums1.length + nums2.length;
    const length = Math.floor((nums1.length + nums2.length - 1) / 2);

    for(let i = 0; i < length; i++) {
        if(!nums2.length || nums1[0] < nums2[0]) {
            nums1.shift();
        } else {
            nums2.shift();
        }
    }

    if(totalLength % 2) {
        return [nums1[0], nums2[0]].sort((a, b) => a - b)[0];
    } else {
        const [low1, low2] = [nums1[0], nums1[1], nums2[0], nums2[1]].sort((a, b) => a - b);
        return (low1!! + low2!!) / 2;
    }
};