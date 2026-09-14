/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
struct ListNode* removeNthFromEnd(struct ListNode* head, int n) {

    int count = 0;
    struct ListNode* countNode = head;
    while (countNode) {
        count++;
        countNode = countNode->next;
    }

    n = count - n;

    struct ListNode dummy;
    dummy.next = head;
    struct ListNode* prev = &dummy;

    for (int i = 0; i <= n; i++) {
        if (i == n) {
            prev->next = head->next;
            break;
        }
        prev = head;
        head = head->next;
    }

    return dummy.next;
}