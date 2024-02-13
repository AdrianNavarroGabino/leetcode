class RecentCounter {
    count: number[];

    constructor() {
        this.count = [] as number[];
    }

    ping(t: number): number {
        this.count.push(t);
        const min = t - 3000;
        const max = t;

        let count = 0;

        this.count.forEach((el) => {
            if (el >= min && el <= max) {
                count++;
            }
        });

        return count;
    }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */