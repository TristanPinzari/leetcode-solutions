/**
 * Definition for a Node.
 * struct Node {
 *     int val;
 *     struct Node *next;
 *     struct Node *random;
 * };
 */

struct Node* copyRandomList(struct Node* head) {
    struct Node* first = NULL;
    struct Node* headPointer = head;
    
    while (headPointer) {
        struct Node* newNode = malloc(sizeof(struct Node));
        newNode->val = headPointer->val;
        newNode->random = NULL;
        newNode->next = headPointer->next;
        headPointer->next = newNode;
        if (!first) first = newNode;
        headPointer = newNode->next;
    }

    while (head) {
        head->next->random = head->random ? head->random->next : NULL;
        struct Node* temp = head->next->next;
        head->next->next = head->next->next ? head->next->next->next : NULL;
        head = temp;
    }

    return first;
}