class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}


const addTwoNumbers = (l1: ListNode | null, l2: ListNode | null): ListNode | null => {
    let current: ListNode | null = l1;
    const l1Array: Array<number> = []
    while (current) {
        l1Array.push(current.val);
        current = current.next;
    }

    current = l2;
    const l2Array: Array<number> = []
    while (current) {
        l2Array.push(current.val);
        current = current.next;
    }

    const longest = l1Array.length > l2Array.length ? l1Array : l2Array;
    const shortest = l1Array.length > l2Array.length ? l2Array : l1Array;

    let mod: Boolean = false;

    const result = longest.map((el, i) => {
        shortest[i] = shortest[i] || 0;
        if(mod) {
            shortest[i - 1] = shortest[i - 1] || 0;
            el += 1;
        }

        const res = el + shortest[i];

        if(res > 9) {
            mod = true;
            return res % 10;
        }

        mod = false;
        return res;
    });

    if(mod) {
        result[result.length - 1] %= 10;
        result[result.length] = 1;
    }

    return result.reverse().reduce((acc: ListNode | null, curr: number) => {
        if(!acc) {
            return new ListNode(curr);
        }
        return new ListNode(curr, acc);
    }, null);
};