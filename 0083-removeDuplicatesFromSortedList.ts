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

function deleteDuplicates(head: ListNode | null): ListNode | null {
    const noDuplicates: number[] = [...new Set(getListNodeValues(head))];
    let result: ListNode | null = null;

    for (let i = noDuplicates.length - 1; i >= 0; i--) {
        result = new ListNode(noDuplicates[i], result);
    }

    return result;
};