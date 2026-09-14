/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
struct ListNode* reverseBetween(struct ListNode* head, int left, int right) {
    struct ListNode* headSave = head;
    if (left == right) return head;
    struct ListNode* last = NULL;
    struct ListNode* firstEnd = NULL;
    struct ListNode* firstHead = NULL;
    int index = 1;
    while (head) {
        if (index < left) {
            last = head;
            index++;
            head = head->next;
            continue;
        }
        if (index == left) {
            firstEnd = last;
            firstHead = head;
            last = head; 
            head = head->next;
        }
        if (index == right) {
            if (firstEnd) {
                firstEnd->next = head;
            } else {
                headSave = head;
            }
            firstHead->next = head->next;
            head->next = last;
            break;
        }
        if (left < index && index < right) {
            struct ListNode* temp = head->next;
            head->next = last;
            last = head;
            head = temp;
        }
        index++;
    }
    return headSave;
}