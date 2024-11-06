function maximumOddBinaryNumber(s: string): string {
    const ones: number = (s.match(/1/g) || []).length;
    const zeros: number = s.length - ones;

    return '1'.repeat(ones - 1) + '0'.repeat(zeros) + '1';
};