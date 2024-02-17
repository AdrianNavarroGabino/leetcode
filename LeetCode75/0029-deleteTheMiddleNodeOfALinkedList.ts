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

function deleteMiddle(head: ListNode | null): ListNode | null {
    const nodeValues: number[] = getListNodeValues(head);
    const middleIndex: number = Math.floor(nodeValues.length / 2);
    let result: ListNode | null = null;

    for (let i = nodeValues.length - 1; i >=0; i --) {
        if (i !== middleIndex) {
            result = new ListNode(nodeValues[i], result);
        }
    }

    return result;
};