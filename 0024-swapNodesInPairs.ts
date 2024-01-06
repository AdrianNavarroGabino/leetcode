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

function swapPairs(head: ListNode | null): ListNode | null {
    let result: ListNode | null = null;
    let headArr: number[] = getListNodeValues(head).reverse();

    if(headArr.length === 1) {
        return new ListNode(headArr[0]);
    }

    if (headArr.length % 2) {
        result = new ListNode(headArr[0], result);
    }

    for (let i = headArr.length % 2 ? 1 : 0; i < headArr.length - 1; i += 2) {
        result = new ListNode(headArr[i], new ListNode(headArr[i + 1], result));
    }

    return result;
};