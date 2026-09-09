function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let carry = 0;
    let result: ListNode | null = null;
    let tail: ListNode | null = null;

    while (l1 || l2 || carry) {
        const sum = (l1?.val ?? 0) + (l2?.val ?? 0) + carry;
        carry = Math.floor(sum / 10);
        const digit = sum % 10;

        const newNode = new ListNode(digit);
        if (!result) {
            result = newNode;
            tail = newNode;
        } else {
            tail!.next = newNode;
            tail = newNode;
        }

        l1 = l1?.next ?? null;
        l2 = l2?.next ?? null;
    }

    return result;
}