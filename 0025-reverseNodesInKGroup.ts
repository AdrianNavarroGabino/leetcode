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

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    let result: ListNode | null = null;
    let headArr: number[] = getListNodeValues(head).reverse();

    if(headArr.length < k) {
        return head;
    }

    if (headArr.length % k) {
        for(let i = 0; i < headArr.length % k; i++) {
            result = new ListNode(headArr[i], result);
        }
    }

    for (let i = headArr.length % k; i < headArr.length - k + 1; i += k) {
        for(let j = 0; j < k; j++) {
            result = new ListNode(headArr[i + k - j - 1], result);
        }
    }

    return result;
};