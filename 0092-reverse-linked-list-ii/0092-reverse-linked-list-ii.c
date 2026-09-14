/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */

struct ListNode* reverseBetween(struct ListNode* head, int left, int right) {
    if (head == NULL || left == right) {
        return head;
    }

    // Dummy node to handle edge cases where left == 1 (reversing from the head)
    struct ListNode dummy;
    dummy.val = 0;
    dummy.next = head;

    struct ListNode* prev = &dummy;

    // Move prev to the node directly preceding position 'left'
    for (int i = 0; i < left - 1; i++) {
        prev = prev->next;
    }

    // Start of sublist to be reversed
    struct ListNode* curr = prev->next;

    // Reverse sublist in-place from left to right
    for (int i = 0; i < right - left; i++) {
        struct ListNode* temp = curr->next;
        curr->next = temp->next;
        temp->next = prev->next;
        prev->next = temp;
    }

    return dummy.next;
}