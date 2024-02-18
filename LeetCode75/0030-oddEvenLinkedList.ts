/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

const getListNodeValues = (list: ListNode | null): Array<number> => {
    let current = list;
    const result: Array<number> = [];

    if(current) {
        result.push(current.val);
    }

    do {
        current = current?.next || null;
        if(current) {
            result.push(current.val);
        }
    } while (current?.next);

    return result;
}

function oddEvenList(head: ListNode | null): ListNode | null {
    const nodeValues: number[] = getListNodeValues(head);
    let result: ListNode | null = null;
    let even: number = nodeValues.length % 2;
    
    for (let i = nodeValues.length - 1 - even; i >= 0; i -= 2) {
        result = new ListNode(nodeValues[i], result);
    }

    for (let i = nodeValues.length - 1 - (even ? 0 : 1); i >= 0; i -= 2) {
        result = new ListNode(nodeValues[i], result);
    }

    return result;
};