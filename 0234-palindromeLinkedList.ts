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

function isPalindrome(head: ListNode | null): boolean {
    const nodeValues = getListNodeValues(head);

    for (let i = 0; i < nodeValues.length / 2; i++) {
        if (nodeValues[i] !== nodeValues[nodeValues.length - 1 - i]) {
            return false;
        }
    }

    return true;
};