
// Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

const getLength = (head: ListNode | null): number => {
    let next: ListNode | null = head?.next || null;
    let count: number = 1;

    while(next) {
        next = next.next;
        count++;
    }

    return count;
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    const length = getLength(head);
    const index: number = length - n;
    let next: ListNode | null = head || null;
    const aux: Array<number> = [];
    let result: ListNode | null;

    if(!head?.next) {
        return null;
    } else if(!head?.next?.next) {
        return n === 2 ? new ListNode(head.next.val) : new ListNode(head.val);
    }

    for(let i = 0; i < length; i++) {
        if(i !== index) {
            aux.unshift(next!.val);
        }
        next!.val = next?.next?.val || 0;
        next!.next = next?.next?.next || null;
    }

    result = new ListNode(aux[0]);

    for(let i = 1; i < length - 1; i++) {
        result = new ListNode(aux[i], result);
    }

    return result;
};