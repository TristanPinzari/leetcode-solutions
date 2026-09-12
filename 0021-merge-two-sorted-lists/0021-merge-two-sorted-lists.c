/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
struct ListNode* mergeTwoLists(struct ListNode* list1, struct ListNode* list2) {
    if (!list1) return list2;
    if (!list2) return list1;
    if (list2->val < list1->val) {
        struct ListNode* temp = list2;
        list2 = list1;
        list1 = temp;
    }
    struct ListNode* head = list1;
    while (list1) {
         if (!list2) break;
        if (list1->val <= list2->val && (!list1->next || list2->val <= list1->next->val)){
            struct ListNode* temp = list2;
            list2 = list2->next;
            temp->next = list1->next;
            list1->next = temp;
        }
        list1 = list1->next;
    }
    return head;
}