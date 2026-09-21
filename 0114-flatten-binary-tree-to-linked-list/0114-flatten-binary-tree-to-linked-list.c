/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */

void flatten(struct TreeNode* root) {
    struct TreeNode* curr = root;
    while (curr) {
        if (curr->left) {
            // find the rightmost node of the left subtree
            struct TreeNode* pred = curr->left;
            while (pred->right) {
                pred = pred->right;
            }
            // attach the original right subtree to the end of the left subtree
            pred->right = curr->right;
            // move left subtree to the right, clear left
            curr->right = curr->left;
            curr->left = NULL;
        }
        curr = curr->right;   // advance to the next node in the flattened chain
    }
}