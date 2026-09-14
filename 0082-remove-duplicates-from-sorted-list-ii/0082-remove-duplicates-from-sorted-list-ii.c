/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
struct ListNode* deleteDuplicates(struct ListNode* head) {
    struct ListNode dummy;
    dummy.next = head;

    struct ListNode* lastUnique = &dummy;
    struct ListNode* prev = &dummy;

    while (head) {
        if ((prev == &dummy || prev->val != head->val) && (head->next == NULL || head->val != head->next->val)) {
            lastUnique->next = head;
            lastUnique = head;
        }
        prev = head;
        head = head->next;
        lastUnique->next = NULL;
    }

    return dummy.next;
}