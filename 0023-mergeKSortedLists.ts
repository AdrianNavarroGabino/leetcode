// Definition for singly-linked list.
// class ListNode {
//     val: number
//     next: ListNode | null
//     constructor(val?: number, next?: ListNode | null) {
//         this.val = (val===undefined ? 0 : val)
//         this.next = (next===undefined ? null : next)
//     }
// }

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

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    let result: ListNode | null = null;

    for(const el of lists.map((l) => getListNodeValues(l)).flat().sort((a, b) => b - a)) {
        result = new ListNode(el, result);
    }
    return result;
};