/**
 * Definition for a Node.
 * struct Node {
 *     int val;
 *     struct Node *left;
 *     struct Node *right;
 *     struct Node *next;
 * };
 */

void connect2(struct Node* root) {
	struct Node* levelStart = root;
    while (levelStart) {
        struct Node* dummy = NULL, *tail = NULL;
        struct Node* curr = levelStart;
        while (curr) {
            if (curr->left) {
                if (tail) tail->next = curr->left; else dummy = curr->left;
                tail = curr->left;
            }
            if (curr->right) {
                if (tail) tail->next = curr->right; else dummy = curr->right;
                tail = curr->right;
            }
            curr = curr->next;
        }
        levelStart = dummy;
    }
}

struct Node* connect(struct Node* root) {
	return (connect2(root), root);
}