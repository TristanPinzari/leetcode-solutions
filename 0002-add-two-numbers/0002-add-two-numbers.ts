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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let carry = 0, first = null, node = null;
    while (l1 || l2 || carry > 0) {
        const l1Val = l1 ? l1.val : 0, l2Val = l2 ? l2.val : 0, newVal = carry + l1Val + l2Val;
        const newNode = new ListNode(newVal % 10, null);
        carry = Math.floor(newVal / 10);
        if (!first) first = newNode;
        if (node) node.next = newNode;
        node = newNode;
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }
    return first;
};