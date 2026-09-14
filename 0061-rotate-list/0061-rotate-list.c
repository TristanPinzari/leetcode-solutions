/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
struct ListNode* rotateRight(struct ListNode* head, int k) {
    if (!head || !k || !head->next) return head;
    struct ListNode* headSave = head;

    int count = 0;
    struct ListNode* countNode = head;
    while (countNode) {
        count++;
        countNode = countNode->next;
    }

    if (!(k%count)) return head;
    k = count - k % count;

    struct ListNode* first;
    struct ListNode* second;
    struct ListNode* third;
    for (int i = 0; i < count; i++) {
        if (i == k - 1) {
            first = head;
        } else if (i == k) {
            second = head;
        }
        if (i == count - 1) {
            third = head;
        }
        head = head->next;
    }

    first->next = NULL;
    third->next = headSave;

    return second;
}