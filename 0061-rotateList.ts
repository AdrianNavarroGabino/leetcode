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

function rotateRight(head: ListNode | null, k: number): ListNode | null {
    if (head === null) {
        return head;
    }
    const nodeValues: number[] = getListNodeValues(head);
    k %= nodeValues.length;
    let result: ListNode | null;

    for (let i = 0; i < k; i++) {
        nodeValues.unshift(nodeValues.pop() || 0);
    }

    for (let i = nodeValues.length - 1; i >= 0; i--) {
        result = new ListNode(nodeValues[i], result);
    }

    return result;
};