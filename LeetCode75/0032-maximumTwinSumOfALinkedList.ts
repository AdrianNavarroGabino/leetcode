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

function pairSum(head: ListNode | null): number {
    const nodeValues: number[] = getListNodeValues(head);
    let max: number = nodeValues[0] + nodeValues[nodeValues.length - 1];

    for (let i = 1; i < nodeValues.length / 2; i++) {
        const candidate: number = nodeValues[i] + nodeValues[nodeValues.length - 1 - i];

        if (candidate > max) {
            max = candidate;
        }
    }

    return max;
};