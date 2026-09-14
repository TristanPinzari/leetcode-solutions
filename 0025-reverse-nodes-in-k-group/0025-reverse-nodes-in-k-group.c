/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
struct ListNode* reverseKGroup(struct ListNode* head, int k) {
    struct ListNode dummy;
    dummy.next = head;

    int count = 0;
    struct ListNode* countNode = head;
    while (countNode) {
        count++;
        countNode = countNode->next;
    }

    struct ListNode* curr = &dummy;
    struct ListNode* prev = head;

    for (int i = k; i <= count; i += k) {
        for (int j = 0; j < k - 1; j++) {
            struct ListNode* temp = head->next;
            head->next = temp->next;
            temp->next = prev;
            curr->next = temp;
            prev = temp;
        }
        curr = head;
        head = head->next;
        prev = head;
    }

    return dummy.next;
}