/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
struct ListNode* partition(struct ListNode* head, int x) {
    struct ListNode dummy;
    dummy.next = head;

    struct ListNode* lastSorted = &dummy;
    struct ListNode* prev = &dummy;

    while (head) {
        struct ListNode* temp = head->next;
        struct ListNode* nextPrev = head;
        if (head->val < x) {
            if (head != lastSorted->next) {
                head->next = lastSorted->next;
                lastSorted->next = head;
                prev->next = temp;
                nextPrev = prev;
            };
            lastSorted = head;
        }
        prev = nextPrev;
        head = temp;
    }

    return dummy.next;
}